# Nextora Digital

Marketing website for Nextora Digital, a software engineering studio. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project Structure

```
app/                    App Router pages, layout, metadata, robots/sitemap, OG image
  api/contact/           Contact form submission endpoint
components/
  layout/                Navbar, Footer
  sections/               Page sections (Hero, Services, Projects, FAQ, Contact, ...)
  ui/                     Reusable primitives (Button, Container, SectionHeading, cards, ...)
  icons/                  Hand-authored SVG icon set
  animations/             Framer Motion variants + reduced-motion provider
constants/                Static site content (services, projects, FAQs, nav links, ...)
lib/                      Small utilities (classnames helper, JSON-LD schema builders)
types/                     Shared TypeScript types
```

All homepage content lives in `app/page.tsx`, composed from `components/sections/*`. Site-wide copy and structured data (name, links, keywords) live in `constants/site.ts`.

## Environment Variables

None are required to build or run the site today — there's no `.env` file to set up.

Once a real email provider is wired into the contact form (see below), its API key will need to be added as an environment variable (e.g. `RESEND_API_KEY`) and read in `app/api/contact/route.ts`.

## Contact Form — Action Required Before Production

`app/api/contact/route.ts` validates incoming submissions and returns a success response, but **does not yet deliver messages anywhere** (no email, no CRM, no database write). This is a placeholder implementation.

Before relying on the contact form in production, wire in an email provider (e.g. [Resend](https://resend.com), SES, Postmark) or a database/CRM write inside that route handler. The spot to add it is marked with a `NOTE:` comment in the file.

## Tech Stack

Next.js · TypeScript · Tailwind CSS v4 · Framer Motion
