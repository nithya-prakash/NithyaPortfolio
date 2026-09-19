A personal portfolio built with Next.js and Tailwind CSS, styled in a warm editorial theme with full-page scroll-snap transitions.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4, with a light/dark theme system (`next-themes`)
- Framer Motion for scroll-triggered and page-transition animations
- react-icons (Simple Icons) for technology logos
- Contact form via [Formspree](https://formspree.io/)

## Develop

```
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

Add a `.env.local` (see `.env.example`) with your own `NEXT_PUBLIC_FORMSPREE_ENDPOINT` for the contact form to work locally.

## Build

```
npm run build
npm start
```

## Structure

- `src/components/` — page sections (Nav, Hero, About, Projects, Education, Experience, Publications, Skills, Personality, Contact, Footer)
- `src/lib/data.ts` — all portfolio content (bio, projects, skills, education, experience, publications)
- `public/resume.pdf` — downloadable resume
- `public/publications/` — published research paper PDF

Live Portfolio : https://nithya-portfolio-silk.vercel.app/
