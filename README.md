# Vishal Rao Portfolio

A premium personal portfolio website for Vishal Rao, a Cloud Solutions Consultant and Computer Engineer focused on Azure, cloud networking, Linux administration, DevOps automation, hybrid infrastructure, monitoring, disaster recovery, security, and enterprise operations.

The site uses a dark technical interface inspired by terminal dashboards, Tron-style neon accents, scanlines, grid textures, glass panels, and subtle motion. All editable portfolio content is stored in TypeScript data files so updates can be made without changing the React components.

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Project Structure

```text
app/            Next.js app routes, layout, metadata wiring, and page composition
components/     Reusable UI components such as the animated console and terminal
data/           Editable portfolio content split by section
lib/            Compatibility exports for data modules
public/         Static assets, including resume.pdf
```

## Editable Content

Most portfolio updates should happen inside `data/`:

- `data/home.ts` - hero, CTA buttons, resume path, metrics, typing console
- `data/about.ts` - professional summary
- `data/skills.ts` - skill categories and icons
- `data/experience.ts` - timeline roles and descriptions
- `data/projects.ts` - project case studies
- `data/certifications.ts` - certification cards
- `data/contact.ts` - email, social links, contact form text, footer text
- `data/terminal.ts` - interactive terminal command output
- `data/navigation.ts` - navigation labels and brand text
- `data/metadata.ts` - SEO metadata

## Resume

The Download Resume button points to:

```text
public/resume.pdf
```

To update the resume, replace `public/resume.pdf` with a new PDF using the same filename. No code changes are required.

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Notes

- The UI, layout, animations, and styling are intentionally kept separate from content.
- Section content is data-driven from `data/`.
- Replacing `public/resume.pdf` updates the downloadable resume immediately when served by the app.
