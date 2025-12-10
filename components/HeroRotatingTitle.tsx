"use client";
import { useEffect, useState } from "react";

const TITLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Front-End Developer",
  "Back-End Developer",
];

export default function HeroRotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TITLES.length);
    }, 2000); // 2 seconds
    return () => clearInterval(id);
  }, []);

  const title = TITLES[index];

  return (
    <p className="mt-6 max-w-2xl text-slate-700 dark:text-slate-300 text-2xl md:text-3xl whitespace-nowrap">
      <span>I'm a </span>
      <span
        key={title}
        className="inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold transition-opacity duration-500"
        aria-live="polite"
      >
        {title}
      </span>
    </p>
  );
}
