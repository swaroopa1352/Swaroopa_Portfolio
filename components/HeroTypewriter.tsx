"use client";
import { useEffect, useState } from "react";

const ROLES = [
  "Computer Science Student",
  "Software Engineer",
  "Full-Stack Developer"
];

const TYPE_SPEED = 80; // ms per character
const HOLD_TIME = 1200; // ms to hold full word before erasing
const ERASE_SPEED = 40; // ms per character when erasing

export default function HeroTypewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing"|"holding"|"erasing">("typing");

  useEffect(() => {
    const current = ROLES[roleIndex];

    if (phase === "typing") {
      if (text.length < current.length) {
        const id = setTimeout(() => setText(current.slice(0, text.length + 1)), TYPE_SPEED);
        return () => clearTimeout(id);
      } else {
        const id = setTimeout(() => setPhase("holding"), HOLD_TIME);
        return () => clearTimeout(id);
      }
    }

    if (phase === "holding") {
      const id = setTimeout(() => setPhase("erasing"), HOLD_TIME);
      return () => clearTimeout(id);
    }

    if (phase === "erasing") {
      if (text.length > 0) {
        const id = setTimeout(() => setText(text.slice(0, text.length - 1)), ERASE_SPEED);
        return () => clearTimeout(id);
      } else {
        setPhase("typing");
        setRoleIndex((i) => (i + 1) % ROLES.length);
      }
    }
  }, [text, phase, roleIndex]);

  return (
    <p className="mt-6 max-w-2xl text-slate-700 dark:text-slate-300 text-2xl md:text-3xl whitespace-nowrap" aria-live="polite">
      <span>I'm a </span>
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
        {text}
        <span className="inline-block w-3 animate-pulse border-r-2 border-primary ml-0.5" aria-hidden />
      </span>
    </p>
  );
}
