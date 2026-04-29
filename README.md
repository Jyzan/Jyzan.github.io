# Jyzan.github.io

Personal homepage built with Vite, React, TypeScript, and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:5173` by default.

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.
When changes are pushed to `main`, GitHub Actions installs dependencies, builds the site,
and deploys the `dist/` folder to GitHub Pages.

For the first deployment, set the repository Pages source to **GitHub Actions**:

1. Open `Jyzan/Jyzan.github.io` on GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main` and wait for the `Deploy to GitHub Pages` workflow to finish.

The video background is stored at `public/blue_moon.mp4`, so Vite copies it into `dist/`
during the production build.
