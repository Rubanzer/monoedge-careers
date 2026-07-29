# MonoEdge hiring funnel

A careers index listing the open roles, plus one application page per role. Each
role page carries its own job description, screening questions, and written
question, and works as a standalone link you can send to one candidate.

| Page | URL |
| --- | --- |
| Careers index | `/hiring/` |
| Senior Computer Vision Engineer | `/hiring/computer-vision-engineer-7f3ac1/` |
| Senior Data Scientist | `/hiring/data-scientist-4b9e26/` |
| Graphic Designer & Video Editor | `/hiring/graphic-designer-d8c105/` |
| Graduate Engineer — Business Brain | `/hiring/business-brain-associate-5c1a7e/` |

Slugs keep their random suffix from when the pages were unlisted. It no longer
buys anything now that the index links to all of them, but the URLs are
published, so changing them would break links already sent.

## Running it

```bash
npm install
npm run dev
```

The careers index is at `http://localhost:5173/`, and each role at its slug path.

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
CV Engineer → `Sheet1`, Data Scientist → `Sheet2`, Designer → `Sheet3`, Business
Brain graduate → `Sheet4`. Headers are written the first time a tab is used, and
missing tabs are created. CVs go to a `MonoEdge Applications/<role>/` folder in
Drive, and the Sheet stores a link.

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

**The logo** comes from `brand/logo-source.jpeg`. The source has a wide white
margin that would leave the mark tiny at header size, so `crop-logo.mjs` trims it
and writes `public/monoedge-mark.png` and `public/favicon.png`:

```bash
node crop-logo.mjs
```

Re-run that if the source is ever replaced. Note the assets are JPEG-derived and
therefore have a white background — fine on this site, which is white throughout,
but a vector original would be better if the brand book has one.

## Editing content

Everything a role says lives in one file under `src/roles/`. Job description,
screening questions, and the voice-note script are all there — no copy is
embedded in the components.

To change a URL, edit `src/roles/slugs.ts`, rename the matching folder under
`pages/`, and update the `mount()` call in that folder's `main.tsx`.
