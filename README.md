# MonoEdge hiring funnel

Three standalone application pages — one per open role. Each page carries its
own job description, its own screening questions, and its own voice-note script.
There are no links between them: a candidate who receives one link sees one role.

| Role | URL |
| --- | --- |
| Senior Computer Vision Engineer | `/hiring/computer-vision-engineer-7f3ac1/` |
| Senior Data Scientist | `/hiring/data-scientist-4b9e26/` |
| Graphic Designer & Video Editor | `/hiring/graphic-designer-d8c105/` |

Slugs carry a random suffix so the pages are not guessable siblings, and every
page is `noindex` so they stay out of search results. This is obscurity, not
access control — the repository is public and so are the pages.

## Running it

```bash
npm install
npm run dev
```

Then open one of the slug paths above at `http://localhost:5173`. There is no
index page — that is deliberate, so `/hiring/` never becomes a directory of all
three roles.

```bash
npm run build     # type-check, then build all three into dist/
npm run preview   # serve the built output
```

## Connecting the Google Sheet

The form posts to a Google Apps Script Web App, which appends a row to the Sheet
and writes the CV to Drive.

1. Open the destination Google Sheet → **Extensions → Apps Script**.
2. Replace `Code.gs` with [`apps-script/Code.gs`](apps-script/Code.gs) and save.
3. **Deploy → New deployment → Web app.** Execute as **Me**, access **Anyone**.
4. Copy the `/exec` URL into `ENDPOINT` in [`public/config.js`](public/config.js).
5. Commit and push. The Action redeploys in about a minute.

`config.js` is a plain runtime file, not bundled — you can change the endpoint
and redeploy without rebuilding.

Each role writes to its own tab, mapped in `ROLE_SHEETS` at the top of the script:
CV Engineer → `Sheet1`, Data Scientist → `Sheet2`, Designer → `Sheet3`. Headers are
written the first time a tab is used, and missing tabs are created. CVs go to a
`MonoEdge Applications/<role>/` folder in Drive, and the Sheet stores a link.

**After editing `Code.gs`, redeploy as a new version** — Manage deployments →
edit → Version: New version. Otherwise the live URL keeps serving the old code.

### Spam handling

The endpoint URL is visible in the page source, which is unavoidable on a static
site. Two guards are in place: a hidden honeypot field, and a minimum time on
page. Neither stops a determined attacker. If junk rows appear, the next step is
a shared secret in the payload that the script checks.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/`. One-time setup: **Settings → Pages → Source: GitHub Actions**.

## Brand

Colour and type come from `MONOEDGE - BRAND IDENTITY.pdf`:

| Token | Value |
| --- | --- |
| MonoEdge Blue | `#204494` |
| Ice Blue | `#85A9DD` |
| Pure White | `#FFFFFF` |
| Void Black | `#000000` |

Nothing outside these four values and tints derived from them appears on the page.

**Type 1 is Monument Extended**, a commercial licence that cannot ship in a public
repository. Archivo at expanded width stands in for it. To swap in the real font:

1. Drop the licensed files into `public/fonts/`.
2. Add an `@font-face` block in `src/styles.css`.
3. Change `--font-display-family` to `'Monument Extended'` and set
   `--display-width: normal`.

Nothing else needs to change — display type is the only thing that reads it.

**Type 2 is JetBrains Mono**, which is open licensed and loads from Google Fonts.
It carries every label, readout, and button on the page.

The wordmark in `src/components/Wordmark.tsx` is a typographic stand-in. Replace
it when the logo files from the brand book are available.

## Editing content

Everything a role says lives in one file under `src/roles/`. Job description,
screening questions, and the voice-note script are all there — no copy is
embedded in the components.

To change a URL, edit `src/roles/slugs.ts`, rename the matching folder under
`pages/`, and update the `mount()` call in that folder's `main.tsx`.
