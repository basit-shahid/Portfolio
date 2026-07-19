# Abdul Basit Shahid — Portfolio

Personal portfolio website of **Abdul Basit Shahid**, a Software Engineering student at COMSATS Lahore Campus specializing in Full-Stack Web Development and Backend Engineering (Laravel, Node.js).

🔗 **Live site:** [abdulbasitshahid.vercel.app](https://abdulbasitshahid.vercel.app)

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=flat&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat&logo=vercel)
![License](https://img.shields.io/badge/license-GPL--3.0-blue)

---

## About

This site is a single-page portfolio introducing Abdul Basit, showcasing his tech stack, featured projects, and future learning goals. It features a boot-sequence intro animation, an interactive tech-stack section, and a project showcase with GitHub links.

**Sections:**
- **Hero** — intro / system boot animation
- **About** — background and interests (DSA, OOP, full-stack & backend engineering)
- **Tech Stack** — Laravel, WordPress, HTML/CSS, GitHub, Node.js
- **Projects** — featured builds ([FastFood Invoice System](https://github.com/basit-shahid/fastfood-invoice-system), [Drop](https://github.com/basit-shahid/drop), [TurboDM](https://github.com/basit-shahid/turbodm))
- **Goals** — current learning direction (DSA, backend/API architecture, tooling)
- **Contact** — email and social links

## Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/typography`, `@tailwindcss/forms`)
- **Language:** TypeScript / Astro components
- **Deployment:** [Vercel](https://vercel.com)

## Project Structure

```
/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── pages/           # Route pages (index.astro, etc.)
│   ├── components/      # Astro/UI components
│   └── styles/
│       └── global.css   # Tailwind v4 theme (@import "tailwindcss"; @theme {...})
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

Astro automatically maps files in `src/pages/` to routes based on file name.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/basit-shahid/Portfolio.git
cd Portfolio
npm install
```

### Commands

| Command                | Action                                           |
| ----------------------- | ------------------------------------------------ |
| `npm install`           | Install dependencies                             |
| `npm run dev`           | Start local dev server at `localhost:3000`       |
| `npm run build`         | Build production site to `./dist/`               |
| `npm run preview`       | Preview the production build locally             |
| `npm run astro ...`     | Run Astro CLI commands (`astro add`, `astro check`) |

## Deployment

The site is deployed on **Vercel** and auto-deploys from the `main` branch.

## Contact

- 📧 Email: [basitdogar59@gmail.com](mailto:basitdogar59@gmail.com)
- 💻 GitHub: [@basit-shahid](https://github.com/basit-shahid)
- 📍 Based in Lahore, Pakistan

## License

This project is licensed under the **GPL-3.0 License** — see the [LICENSE](./LICENSE) file for details.
