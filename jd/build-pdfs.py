#!/usr/bin/env python3
"""Render the graduate-role JD Markdown files in this folder to branded PDFs.

Usage:  python3 jd/build-pdfs.py
Requires:  pip install markdown, and a Chromium/Chrome binary. Point the CHROME
env var at it, or the script tries a few common locations.

PDFs are written to jd/pdf/. Edit the .md files and re-run to regenerate.
"""
import base64
import os
import pathlib
import shutil
import subprocess

import markdown

JD = pathlib.Path(__file__).resolve().parent
REPO = JD.parent
OUT = JD / "pdf"
OUT.mkdir(exist_ok=True)


def find_chrome():
    if os.environ.get("CHROME"):
        return os.environ["CHROME"]
    for name in ("google-chrome", "chromium", "chromium-browser", "chrome"):
        found = shutil.which(name)
        if found:
            return found
    for path in ("/opt/pw-browsers/chromium",):
        if pathlib.Path(path).exists():
            return path
    raise SystemExit("No Chrome/Chromium found. Set the CHROME env var.")


CHROME = find_chrome()

mark_b64 = base64.b64encode((REPO / "public" / "monoedge-mark.png").read_bytes()).decode()
MARK = f"data:image/png;base64,{mark_b64}"

DOCS = [
    "business-brain-graduate-engineer.md",
    "frontend-engineer-ui-ux.md",
    "data-engineer.md",
]

CSS = """
@page { size: A4; margin: 20mm 18mm 18mm 18mm; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a;
  font-size: 10.5pt; line-height: 1.5; margin: 0; }
.brandbar { display: flex; align-items: center; gap: 10px; padding-bottom: 10px;
  border-bottom: 2px solid #204494; margin-bottom: 22px; }
.brandbar img { height: 26px; width: auto; }
.brandbar .name { font-weight: 700; letter-spacing: 0.06em; font-size: 12pt;
  color: #204494; text-transform: uppercase; }
.brandbar .tag { margin-left: auto; font-size: 8.5pt; letter-spacing: 0.12em;
  text-transform: uppercase; color: #6b7280; }
h1 { color: #204494; font-size: 20pt; line-height: 1.15; margin: 0 0 4px 0; font-weight: 700; }
h1 + p strong { color: #204494; }
h1 + p { color: #374151; font-size: 10pt; margin: 0 0 14px 0; }
h2 { color: #204494; font-size: 12.5pt; margin: 22px 0 8px 0; padding-bottom: 4px;
  border-bottom: 1px solid #d7deea; font-weight: 700; }
p { margin: 0 0 9px 0; }
strong { color: #111827; }
ul { margin: 0 0 10px 0; padding-left: 18px; }
li { margin: 0 0 5px 0; }
li::marker { color: #204494; }
a { color: #204494; text-decoration: none; word-break: break-word; }
hr { border: none; border-top: 1px solid #e5e7eb; margin: 18px 0; }
blockquote { margin: 12px 0; padding: 8px 14px; background: #f2f5fb;
  border-left: 3px solid #204494; color: #374151; font-size: 9.8pt; }
blockquote p { margin: 0; }
table { border-collapse: collapse; width: 100%; margin: 6px 0 12px 0; font-size: 9.8pt; }
th, td { border: 1px solid #d7deea; padding: 6px 10px; text-align: left; vertical-align: top; }
thead th { background: #204494; color: #ffffff; font-weight: 600; }
td:first-child { font-weight: 600; color: #204494; width: 32%; }
ol { padding-left: 18px; margin: 0 0 10px 0; }
ol li::marker { color: #204494; font-weight: 700; }
h2, h1 { break-after: avoid; }
li, tr { break-inside: avoid; }
em { color: #6b7280; }
"""

TEMPLATE = """<!doctype html><html lang="en"><head><meta charset="utf-8">
<style>{css}</style></head><body>
<div class="brandbar"><img src="{mark}" alt="MonoEdge">
<span class="name">MonoEdge</span><span class="tag">Careers &middot; Pune</span></div>
{body}</body></html>"""

for src in DOCS:
    text = (JD / src).read_text(encoding="utf-8")
    body = markdown.markdown(text, extensions=["tables", "sane_lists"])
    # Keep the two bold meta lines under the H1 on separate lines.
    body = body.replace("</strong>\n<strong>", "</strong><br><strong>")
    html = TEMPLATE.format(css=CSS, mark=MARK, body=body)
    html_path = OUT / (src[:-3] + ".html")
    html_path.write_text(html, encoding="utf-8")
    pdf_path = OUT / (src[:-3] + ".pdf")
    subprocess.run(
        [CHROME, "--headless", "--disable-gpu", "--no-sandbox",
         "--no-pdf-header-footer", f"--print-to-pdf={pdf_path}", html_path.as_uri()],
        check=True, capture_output=True,
    )
    html_path.unlink()
    print(f"wrote {pdf_path.relative_to(REPO)}")
