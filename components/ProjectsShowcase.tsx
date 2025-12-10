"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Project } from "@/lib/data";
import Button from "./Button";
import SkillBadge from "./SkillBadge";
// Removed ProjectDetails modal usage for grid view

type Props = { projects: Project[] };

export default function ProjectsShowcase({ projects }: Props) {
  // Show only first 5 initially
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const visible = showAll ? projects : projects.slice(0, 5);

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-7xl">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map(p => (
          <ProjectCardGrid key={p.id} project={p} />
        ))}
      </div>
      {/* Toggle */}
      <div className="mt-10 flex justify-center">
        {projects.length > 5 && (
          <Button
            onClick={() => {
              if (showAll) {
                setShowAll(false);
                // Bring the grid back into view when collapsing
                containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                setShowAll(true);
              }
            }}
          >
            {showAll ? "View Less" : "Other Projects"}
          </Button>
        )}
      </div>
    </div>
  );
}

function ProjectCardGrid({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} thumbnail`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Bottom gradient overlay */}
        {/* Remove heavy desaturating overlay; keep minimal fade only in dark mode */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-transparent dark:from-transparent dark:via-slate-900/20 dark:to-slate-900/40" />
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.blurb}</p>
        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map(t => (
            <SkillBadge key={t} label={t} />
          ))}
        </div>
        {/* Actions */}
        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary/90"
          >
            <GitHubIcon /> GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              <ArrowIcon /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58V21.3c-3.34.73-4.04-1.6-4.04-1.6-.55-1.41-1.34-1.79-1.34-1.79-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.63-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}