# Full-Stack Developer Portfolio

Modern, single-page portfolio built with Next.js (App Router) and Tailwind CSS. Includes smooth scrolling navigation, dark/light theme toggle, accessible components, lazy-loaded images, SEO metadata, and a contact form with validation and an optional email delivery backend.

## Features

- Single-page layout with smooth scroll sections
- Minimal palette (3 colors) and 2 font families
- Light/dark mode toggle with persistence
- Sections: Hero, About, Projects, Skills, Experience, Contact
- Projects with thumbnails, tech badges, details, and architecture diagram
- Contact form with validation (Zod + RHF) and API route (Nodemailer)
- SEO metadata, OpenGraph, and fast image loading (`next/image`)
- Accessible by default (focus styles, aria labels)
- Responsive mobile-first design

## Tech Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS 3
- next-themes (theme toggle)
- react-hook-form + zod
- framer-motion (available for future animations)

## Getting Started

### 1) Install dependencies

```cmd
npm install
```

### 2) Run the dev server

```cmd
npm run dev
```

Then open http://localhost:3000 in your browser.

### 3) Customize content

Edit `lib/data.ts` to update:

- `HERO` (name, headline)
- `SOCIALS` (GitHub, LinkedIn, email)
- `SKILLS`, `EXPERIENCE`, `PROJECTS` (titles, descriptions, tech, links)
  Replace images in `public/images/**` and `public/resume.pdf` with your real assets.

### 4) Configure contact email (optional)

Create `.env.local` with SMTP settings to enable email delivery from the contact form.

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
CONTACT_TO=your_inbox@example.com
```

If not set, messages are logged to the server console and still return success for local testing.

## Scripts

```cmd
npm run dev     # start dev server
npm run build   # production build
npm run start   # start production server
npm run lint    # run ESLint
npm run format  # format with Prettier
```

## Deployment

- Vercel: Zero-config for Next.js. Add your env vars in Project Settings → Environment Variables.
- Netlify: Supported via Next runtime adapter, or deploy the static output with serverless functions.

## Accessibility & Performance

- Keyboard focus styles and aria attributes
- Lazy-loaded, responsive images
- Minimal JS and dependencies for fast load

## License

This project is provided as a template for your personal portfolio. Replace content and images with your own.
