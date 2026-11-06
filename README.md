# Project Pig Brand

The dedicated documentation repository for Project Pig's brand, built with [VitePress](https://vitepress.dev/).

This is a documentation foundation. Brand positioning, identity, voice, and assets remain placeholders until approved content is added. The default VitePress styling is not an approved brand identity.

## Requirements

- Node.js 22 LTS (`nvm use` reads `.nvmrc`)
- npm

## Local development

```sh
npm ci
npm run docs:dev
```

Open the localhost URL shown in the terminal. Development and preview servers bind to `127.0.0.1` by default.

## Commands

| Command                | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `npm run docs:dev`     | Start the local development server             |
| `npm run docs:build`   | Build the static site and check internal links |
| `npm run docs:preview` | Preview the latest production build locally    |
| `npm run format`       | Format source files                            |
| `npm run format:check` | Check source formatting                        |
| `npm run typecheck`    | Check the VitePress configuration              |
| `npm run check`        | Run formatting, type checking, and the build   |

## Structure

```text
docs/
  .vitepress/config.mts   Site configuration, navigation, and local search
  index.md               Documentation home
  guide/                 Setup and contribution instructions
  brand/                 Brand documentation placeholders
  assets/                Approved asset index placeholder
```

Read [the contribution guide](docs/guide/contributing.md) before adding guidance. CI checks pull requests and changes to `main`; it does not publish the site.

## Dependency maintenance

VitePress is pinned to the stable `1.6.4` release. Its Vite dependency is overridden to `6.4.5` to avoid known vulnerabilities in the default Vite 5 dependency tree. The bundled Vue plugin supports Vite 6. Keep this override covered by `npm run check` and `npm audit`; revisit it when upgrading VitePress.

## Hosting and privacy

No deployment, GitHub Pages workflow, or hosting destination is configured. The repository is private; keep any future hosting access controls intentional. A private repository or `noindex` tag is not access control for a deployed website.

Build output is in `docs/.vitepress/dist/` and is ignored by Git. For a future subdirectory host, set `DOCS_BASE` for both build and preview:

```sh
DOCS_BASE=/brand/ npm run docs:build
DOCS_BASE=/brand/ npm run docs:preview
```

The base must start and end with `/`. See [Getting started](docs/guide/getting-started.md) for details.
