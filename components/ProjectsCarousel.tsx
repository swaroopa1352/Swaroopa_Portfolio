"use client";

import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/data";

type Props = { projects: Project[]; variant?: "default" | "featured" };

export default function ProjectsCarousel({ projects, variant = "default" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.9, 800);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative mx-auto w-full max-w-7xl px-2">
      {/* side gradient fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent dark:from-slate-950" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent dark:from-slate-950" />

      <div
        ref={ref}
        className="no-scrollbar scroll-smooth flex snap-x snap-mandatory overflow-x-auto gap-6 py-2"
      >
        {projects.map(p => (
          <div
            key={p.id}
            className={
              variant === "featured"
                ? "snap-start shrink-0 w-[88vw] sm:w-[420px] md:w-[460px] lg:w-[500px] xl:w-[520px]"
                : "snap-start shrink-0 w-[90vw] sm:w-[520px] md:w-[560px] lg:w-[580px] xl:w-[600px]"
            }
          >
            <ProjectCard project={p} variant={variant} />
          </div>
        ))}
      </div>

      {/* side navigation buttons */}
      <button
        aria-label="Scroll projects left"
        onClick={() => scrollBy(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-md ring-1 ring-slate-300 backdrop-blur transition hover:bg-white dark:bg-slate-800/80 dark:ring-slate-700 dark:hover:bg-slate-800"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M14 7 9 12l5 5" />
        </svg>
      </button>
      <button
        aria-label="Scroll projects right"
        onClick={() => scrollBy(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow-md ring-1 ring-slate-300 backdrop-blur transition hover:bg-white dark:bg-slate-800/80 dark:ring-slate-700 dark:hover:bg-slate-800"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m10 7 5 5-5 5" />
        </svg>
      </button>
    </div>
  );
}
