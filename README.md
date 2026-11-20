# justinim-dev.github.io

My personal engineering portfolio, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run it locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Where things live

| To change…                                   | Edit                                   |
| -------------------------------------------- | -------------------------------------- |
| Name, email, phone, GitHub/LinkedIn links    | `src/data/site.ts`                     |
| About, education, experience, skills         | `src/data/site.ts`                     |
| A project page                               | `src/content/projects/<name>.md`       |
| Header / footer                              | `src/components/Header.astro`, `Footer.astro` |
| Styling                                      | `src/styles/global.css`                |
| Images                                       | `public/images/`                       |

### Adding a project

Copy any file in `src/content/projects/`, rename it (the file name becomes the URL, e.g.
`my-robot.md` → `/projects/my-robot/`), and edit the fields at the top:

- `listed: true` shows a card on the home page; `order` sets its position.
- `date` and `summary` are what the card shows.
- `gallery`, `details` and `links` fill the project page. One link shows a button;
  two or more show a dropdown.

The text below the `---` line is the project description, written in Markdown.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
