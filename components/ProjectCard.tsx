"use client";
import Image from "next/image";
import SkillBadge from "./SkillBadge";
import Button from "./Button";
import type { Project } from "@/lib/data";
import { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

export default function ProjectCard({ project, variant = "default" }: { project: Project; variant?: "default" | "featured" }) {
  const [open, setOpen] = useState(false);

  if (variant === "featured") {
    return (
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-0 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 px-6 py-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0,4).map((t) => (
                <SkillBadge key={t} label={t} />
              ))}
            </div>
          </div>
          <p className="line-clamp-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{project.blurb}</p>
          <div className="mt-auto flex items-center gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button>Live Demo</Button>
              </a>
            )}
            <a href={project.sourceUrl} target="_blank" rel="noreferrer">
              <Button variant="ghost">Source Code</Button>
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="ml-auto inline-flex items-center gap-1 text-sm text-primary underline underline-offset-4"
            >
              Read more
            </button>
          </div>
        </div>
        <ProjectDetailsModal open={open} onClose={() => setOpen(false)} project={project} />
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={project.image}
          alt={`${project.title} thumbnail`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={false}
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-1 line-clamp-3 text-sm text-slate-600 dark:text-slate-300">{project.blurb}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <SkillBadge key={t} label={t} />
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <Button>Live Demo</Button>
            </a>
          )}
          <a href={project.sourceUrl} target="_blank" rel="noreferrer">
            <Button variant="ghost">Source Code</Button>
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="ml-auto inline-flex items-center gap-1 text-sm text-primary underline underline-offset-4"
          >
            Read more
          </button>
        </div>
      </div>
      <ProjectDetailsModal open={open} onClose={() => setOpen(false)} project={project} />
    </article>
  );
}
