"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";

type Props = {
  open: boolean;
  onClose: () => void;
  project: Project;
};

export default function ProjectDetailsModal({ open, onClose, project }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
      <div className="relative z-[101] w-full max-w-3xl overflow-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold">{project.title}</h3>
          <button
            aria-label="Close"
            className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <p className="text-slate-700 dark:text-slate-300">{project.blurb}</p>

        <div className="mt-4 space-y-4 text-sm">
          <div>
            <p className="font-medium">Problem</p>
            <p className="text-slate-700 dark:text-slate-300">{project.details.problem}</p>
          </div>
          <div>
            <p className="font-medium">Solution</p>
            <p className="text-slate-700 dark:text-slate-300">{project.details.solution}</p>
          </div>
          <div>
            <p className="font-medium">Key Features</p>
            <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
              {project.details.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium">Role</p>
            <p className="text-slate-700 dark:text-slate-300">{project.details.role}</p>
          </div>
          <div>
            <p className="font-medium">Challenges & Solutions</p>
            <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
              {project.details.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            {/* <p className="mb-2 font-medium">Architecture</p>
            <div className="relative h-64 w-full overflow-hidden rounded-md border border-slate-200 dark:border-slate-800">
              <Image
                src={project.details.architecture}
                alt={`${project.title} architecture diagram`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
