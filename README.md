# portfolio-v4

This is the most recent version of my portfolio and is currently live at [iainmcilveen.com](https://iainmcilveen.com/).

Built with [Nuxt 4](https://nuxt.com/), Vue 3 and SCSS, and deployed as a static site to GitHub Pages.

## Getting started

Requires Node.js 24+ and [pnpm](https://pnpm.io/) (the version is pinned in `package.json`).

```sh
pnpm install
pnpm dev        # start the dev server at http://localhost:3000
```

## Scripts

| Command             | Description                                 |
| ------------------- | ------------------------------------------- |
| `pnpm dev`          | Start the dev server with hot reload        |
| `pnpm generate`     | Build the static site into `.output/public` |
| `pnpm preview`      | Preview the production build locally        |
| `pnpm typecheck`    | Type check the project with `vue-tsc`       |
| `pnpm lint`         | Lint with ESLint (`pnpm lint:fix` to fix)   |
| `pnpm format`       | Format all files with Prettier              |
| `pnpm format:check` | Check formatting without changing any files |

## Editing content

All of the site's text lives in Markdown files under `content/` (via [Nuxt Content](https://content.nuxt.com/)). The front matter holds the structured fields and the body is the description. The schemas are in `content.config.ts`, so a missing or misspelled field fails the build.

- **Home page, links and resume:** `content/home.md`. The name, job title and links here also feed the nav bar and the schema.org data for search engines.
- **Experiences:** one file per company in `content/experiences/`. List `roles` most recent first; `order` sets the position on the timeline.
- **Projects:** one file per project in `content/projects/`. `category` is `work` or `personal`, and `order` sets the position. Set `animated: true` for animated images so they aren't flattened by image optimisation.
- **Images:** `public/img/`. They're resized and converted to WebP at build time by `@nuxt/image`.
- **Colours:** shared SCSS variables in `app/assets/scss/GlobalVar.scss`

The sitemap is generated automatically from the site's pages.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which checks formatting, lints, type checks, builds the site with the `github_pages` preset and deploys it to GitHub Pages. Run `pnpm format`, `pnpm lint` and `pnpm typecheck` before pushing, since any of these failing will stop the deploy.
