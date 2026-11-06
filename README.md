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

Read [the contribution guide](docs/guide/contributing.md) before adding guidance. CI checks pull requests and changes to `main` at both `/` and `/project-pig-brand/`. The separate Pages workflow stays disabled until publication and access are approved.

## Dependency maintenance

VitePress is pinned to the stable `1.6.4` release. Its Vite dependency is overridden to `6.4.5` to avoid known vulnerabilities in the default Vite 5 dependency tree. The bundled Vue plugin supports Vite 6. Keep this override covered by `npm run check` and `npm audit`; revisit it when upgrading VitePress.

## GitHub Pages and privacy

`.github/workflows/pages.yml` builds and deploys the site using GitHub's official Pages actions. It only runs from `main` when the repository Actions variable `PAGES_DEPLOYMENT_ENABLED` is exactly `true`. Until then, even merging this workflow does not publish anything. Pull requests only run the documentation checks.

A private repository does **not** mean a private Pages site. GitHub Pages from a private organization repository requires GitHub Team or Enterprise Cloud; restricting site access to repository readers requires **Enterprise Cloud**. Public Pages can expose every generated page, asset, and search-index entry. The site's `noindex` tag is not access control.

### Enable deployment after approval

1. Confirm the organization's plan supports Pages for this private repository and approve the site's audience. Do not make the repository public to bypass plan limits.
2. In repository **Settings → Pages**, select **GitHub Actions** under **Build and deployment → Source**. For a private site, select private visibility and verify it restricts access to repository readers. Public publication requires separate approval of the documentation being exposed.
3. Review the `github-pages` environment's deployment branch rules and restrict it to `main`. Add approval protection if the organization's plan supports it.
4. After the workflow is merged into `main` and the access settings are verified, create the repository Actions variable `PAGES_DEPLOYMENT_ENABLED` with value `true` under **Settings → Secrets and variables → Actions → Variables**.
5. Run **Deploy documentation to GitHub Pages** manually on `main`, or push an approved change to `main`. Check its deployment URL and access behavior before sharing it.

The workflow does not enable Pages, change visibility, or merge a pull request. Clearing `PAGES_DEPLOYMENT_ENABLED` stops future deployments; it does **not** unpublish an existing site. Use **Settings → Pages → Unpublish site** if a published site must be removed.

### Base paths and local preview

The deployment reads the actual base path from `actions/configure-pages`, so it supports the standard project URL (`/project-pig-brand/`), custom domains, and private Pages URLs without hard-coding a public destination. The standard public URL, if explicitly approved and configured, would be `https://quovolt.github.io/project-pig-brand/`; this is a target, not a verified live site.

Build output is in `docs/.vitepress/dist/` and is ignored by Git. To test the standard project path locally:

```sh
DOCS_BASE=/project-pig-brand/ npm run docs:build
DOCS_BASE=/project-pig-brand/ npm run docs:preview
```

The base must start and end with `/`. Local development defaults to `/`.

References: [GitHub Pages plans and publication](https://docs.github.com/en/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization), [private-site access control](https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site), and [custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
