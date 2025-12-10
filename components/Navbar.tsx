"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { SOCIALS } from "@/lib/data";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800">
      <nav className="container mx-auto flex h-16 items-center justify-between gap-2 px-4">
        <Link href="#hero" className="font-display text-xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">NSN</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-700 hover:text-primary dark:text-slate-200">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href={SOCIALS.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.25-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.78.84 1.25 1.91 1.25 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.09.81 2.2v3.26c0 .32.21.69.82.58A12 12 0 0 0 12 .5Z"/>
            </svg>
          </a>
          <a href={SOCIALS.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.39 0-2.75 1.86-2.75 3.78V24h-4V8z"/>
            </svg>
          </a>
          <a href={SOCIALS.email} aria-label="Email" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 5h18v14H3z" stroke="currentColor" strokeWidth="2"/>
              <path d="m3 7 9 7 9-7" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
