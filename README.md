![](https://repository-images.githubusercontent.com/740605856/9c96da34-519c-4d70-9e8a-812c17269c78)

# Minimalist CV

_This was created inspired by [BartoszJarocki/cv](https://github.com/BartoszJarocki/cv)._

This is a feature-rich CV template repository, optimized for GitHub Pages, allowing anyone to easily publish their own CV.

## Featrues

- Print-friendly
- Mobile-friendly
- Dark mode
- Internationalization
- Accessibility support OG
- Automatic OG image generation
- Responsive
- Static Export
- Standard Support for GitHub Pages

---

## Getting Started

First, run the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Edit Data

Please edit the following file. Feel free to customize the UI and functionality as needed.

- [app.config.ts](/app.config.ts)
- [UI Locales](/locales)
- [Redume Data](/data)

## Generate OG Image

Please execute the following while the development server is running.

```bash
bun ogimage
# or
PORT=3001 bun ogimage
```

The OG Image template can be edited in [og-image/page.tsx](app/[locale]/og-image/page.tsx).

## Deploy

GitHub Actions automatically publishes the contents of the main branch. Please enable GitHub Pages in the repository settings beforehand.

## Custom Domain

If you are using a custom domain with GitHub Pages, please remove the following line from [gh-pages.yml](.github/workflows/gh-pages.yml).

```diff
name: Build with Next.js
  run: bun run build
- env:
-   REPOSITORY_NAME: ${{ github.event.repository.name }}
```

Next, please edit [app.config.ts](app.config.ts).

```ts
export const AppConfig = {
  defaultLocale: 'en',
  // Please replace host with your custom domain.
  host: process.env.GITHUB_PAGES_ORIGIN as string,
```
