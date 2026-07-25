import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';
import { ROLE_SLUGS } from './src/roles/slugs';

// `root: pages/` makes each role build to dist/<slug>/index.html with no extra
// path segment. `base: './'` keeps every asset reference relative, so a page
// works at any depth — /hiring/<slug>/ on Pages, or opened straight off disk.
export default defineConfig({
  root: resolve(__dirname, 'pages'),
  base: './',
  publicDir: resolve(__dirname, 'public'),
  plugins: [react(), tailwindcss()],
  server: {
    fs: { allow: [resolve(__dirname)] },
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        ROLE_SLUGS.map((slug) => [slug, resolve(__dirname, `pages/${slug}/index.html`)]),
      ),
    },
  },
});
