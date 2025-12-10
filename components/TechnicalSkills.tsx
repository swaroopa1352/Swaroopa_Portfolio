"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { SKILLS, TECHNICAL_SKILLS } from "@/lib/data";
import { getSkillLogo, getSkillImage } from "./SkillIcon";

// Safe access to optional frameworks array (typing workaround for const inference)
const FRAMEWORKS: string[] = (TECHNICAL_SKILLS as any).frameworks ?? [];

// New tab format requested
const CATEGORIES = [
  { key: "languages", label: "Programming Languages" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend & APIs" },
  { key: "databases", label: "Databases & Tools" },
  { key: "cloud", label: "Cloud & DevOps" },
  { key: "ML", label: "ML & GenAI" },
] as const;
type CategoryKey = typeof CATEGORIES[number]["key"];

export default function TechnicalSkills() {
  const [active, setActive] = useState<CategoryKey>("languages");

  const items = useMemo(() => {
    // Helper to dedupe while preserving first occurrence order
    const dedupe = (arr: string[]) => Array.from(new Set(arr));
    switch (active) {
      case "languages":
        return [...TECHNICAL_SKILLS.language];
      case "frontend": {
        // Frontend: frameworks & libraries related to UI
        const ui = FRAMEWORKS.filter((f: string) => ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "React Native"].includes(f));
        return dedupe([...SKILLS.frontend, ...ui]);
      }
      case "backend": {
        // Backend & APIs
        const backendRelated = FRAMEWORKS.filter((f: string) => ["Node.js", "Flask", "Express.js", "Django", "Spring Boot", "RESTful APIs"].includes(f));
        return dedupe([...SKILLS.backend, ...backendRelated]);
      }
      case "databases": {
        // Databases & Tools (include database tech + general tooling like Git, Docker, Vercel, Netlify, Jest)
        return dedupe([...SKILLS.databases, ...SKILLS.tools]);
      }
      case "cloud": {
        // Cloud & DevOps from technical skills devops list
        return [...TECHNICAL_SKILLS.devops];
      }
      case "ML": {
        // ML & GenAI
        return [...TECHNICAL_SKILLS.mlData];
      }
      default:
        return [...TECHNICAL_SKILLS.language];
    }
  }, [active]);

  return (
    <div className="mx-auto w-full max-w-7xl">
      <p className="mx-auto mb-10 max-w-3xl text-slate-600 dark:text-slate-300">
        Technologies and frameworks I work with
      </p>
      {/* Tabs */}
      <div className="mx-auto mb-12 flex w-full max-w-5xl items-center justify-center gap-6 overflow-x-auto">
        {CATEGORIES.map((c) => {
          const isActive = c.key === active;
          return (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={
                "relative rounded-full px-5 py-2 text-sm font-medium transition-colors " +
                (isActive
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white")
              }
            >
              {c.label}
            </button>
          );
        })}
      </div>
      {/* Skills Grid (fixed min-height to prevent certificates section from shifting into view when switching tabs) */}
      <div className="mx-auto max-w-6xl min-h-[30rem] grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
        {items.map((skill) => {
          const logo = getSkillLogo(skill);
          const imageUrl = getSkillImage(skill);
          return (
            <div
              key={skill}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/90 ring-1 ring-slate-200 shadow-sm dark:bg-slate-800 dark:ring-slate-700">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt={`${skill} logo`}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                    priority={false}
                  />
                ) : logo ? (
                  <span className="h-10 w-10 text-sm" aria-hidden>{logo}</span>
                ) : (
                  <span className="text-lg font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                    {abbr(skill)}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-200">{skill}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function abbr(label: string): string {
  // Return a compact 2-3 letter abbreviation for the logo square
  const specials: Record<string, string> = {
    "React.js": "Rx",
    "Node.js": "Nd",
    "Next.js": "Nx",
    "Tailwind CSS": "Tw",
    JavaScript: "JS",
    TypeScript: "TS",
    Python: "Py",
    Kotlin: "Kt",
    Django: "Dj",
    "Spring Boot": "SB",
    "Android SDK": "Ad",
    "Three.js": "3D",
    Solidity: "So",
    TensorFlow: "TF",
    "scikit-learn": "SK",
    Docker: "Dc",
    Kubernetes: "K8s",
    AWS: "AWS",
    Azure: "Az",
    GCP: "GCP",
  };
  if (specials[label]) return specials[label];
  const clean = label.replace(/[^A-Za-z0-9+]/g, " ").trim();
  const parts = clean.split(/\s+/);
  if (parts.length === 1) {
    const s = parts[0];
    return s.length <= 3 ? s : s.slice(0, 3);
  }
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}
