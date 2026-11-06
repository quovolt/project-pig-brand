# Getting started

This repository is the dedicated home for Project Pig brand documentation. It uses [VitePress](https://vitepress.dev/) to turn Markdown files into a searchable documentation site.

## Current status

The site structure is ready for content. The brand pages are clearly marked placeholders, not approved guidance. No deployment or public hosting is configured.

## Run locally

Use Node.js 22 LTS and npm. From the repository root:

```sh
npm ci
npm run docs:dev
```

Open the local URL printed in your terminal. The development server binds to `127.0.0.1` by default.

## Check and preview

```sh
npm run check
npm run docs:preview
```

The check runs formatting validation, TypeScript checks for the VitePress configuration, and a production build. VitePress also checks internal Markdown links during the build.

The preview command serves the latest production build locally. Run the build again after changes before previewing.

## Where content lives

- `docs/brand/`: brand foundations, visual identity, and voice.
- `docs/assets/`: approved asset references and usage notes.
- `docs/guide/`: documentation setup and contribution instructions.
- `docs/.vitepress/config.mts`: navigation, search, and site configuration.

See [Contributing](./contributing) before adding or changing guidance.

## Hosting later

The default build assumes the site is served at `/`. For a future subdirectory deployment, set a base path with a leading and trailing slash:

```sh
DOCS_BASE=/brand/ npm run docs:build
DOCS_BASE=/brand/ npm run docs:preview
```

Static output is generated in `docs/.vitepress/dist/`. Decide the hosting destination and access controls before deploying it. A private GitHub repository and the site's `noindex` tag do not make a deployed website private.
