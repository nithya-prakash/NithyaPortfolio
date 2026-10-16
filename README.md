# Nithya Madalakote Prakash — Portfolio

Live site: https://nithya-portfolio-silk.vercel.app

Personal portfolio of an AI engineer (RAG, LLM agents, MLOps). The idea is evidence over adjectives: four flagship case studies, each with a demo GIF, three measured results taken from the project's own README, and an "honest limits" note, followed by other work, education, research and experience.

## Highlights

- **Case studies:** Industrial AI Copilot, ClauseGuard, FleetOps and HybridRAG, then eight more projects with one headline metric each. Every number is copied from the project README it links to.
- **Ask my portfolio:** a small RAG system that runs in the browser. It searches this site's own content with BM25, answers with quoted citations, and declines when the evidence is weak. No LLM, no server, nothing leaves the browser.
- **Details:** English and German content, light and dark themes, a skills marquee, scroll reveals, a contact form, and a downloadable one-page resume (`public/resume.pdf`).

## Stack

- Next.js 16 (App Router) and TypeScript
- Tailwind CSS v4, `next-themes` for light and dark
- Framer-free: animations are plain CSS and `IntersectionObserver`
- Contact form via [Formspree](https://formspree.io/)

## Develop

```
npm install
npm run dev
```

Open http://localhost:3000. For the contact form, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.

## Build

```
npm run build
npm start
```

## Structure

- `src/components/` — page sections (Nav, Hero, FlagshipWork, OtherWork, AskPortfolio, CoffeeBreak, Approach, Journey, Skills, Contact, Footer)
- `src/lib/work.ts` — case studies, other work and section copy in English and German
- `src/lib/data.ts` — profile, education, experience, skills and publication
- `src/lib/ask.ts` — the in-browser retrieval used by "Ask my portfolio" (BM25, synonyms, evidence gate)
- `public/resume.pdf` — the resume; `public/publications/` — the published paper

## Notes

- Demo GIFs are loaded from the project repositories on GitHub, so they update when those repos change.
- Content lives in `work.ts` and `data.ts`; there is no CMS.
