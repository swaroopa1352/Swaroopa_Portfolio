import React from "react";
import Image from "next/image";

// Central icon map. Add new skills here.
// Each icon uses currentColor so you can wrap it in a colored parent.
// Keep SVGs lightweight for performance.
const ICONS: Record<string, React.ReactNode> = {
  javascript: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <rect width={64} height={64} rx={14} fill="#F7DF1E" />
      <text x={16} y={43} fontSize={28} fontFamily="Inter, Arial" fill="#1B1F23" fontWeight={700}>JS</text>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <rect width={64} height={64} rx={14} fill="#3178C6" />
      <text x={12} y={44} fontSize={30} fontFamily="Inter, Arial" fill="#fff" fontWeight={700}>TS</text>
    </svg>
  ),
  "c++": (
    <svg viewBox="0 0 64 64" aria-hidden>
      <path d="M32 4 8 18v28l24 14 24-14V18L32 4Z" fill="#2F74C0" />
      <text x={20} y={40} fontSize={20} fontFamily="Inter, Arial" fill="#fff" fontWeight={700}>C++</text>
    </svg>
  ),
  c: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <path d="M32 4 8 18v28l24 14 24-14V18L32 4Z" fill="#2F74C0" />
      <text x={26} y={40} fontSize={24} fontFamily="Inter, Arial" fill="#fff" fontWeight={700}>C</text>
    </svg>
  ),
  java: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <rect width={64} height={64} rx={14} fill="#1E2532" />
      <path d="M38 18c-2 3-1 6 2 9-4-1-7-2-9-4 0 3 2 5 6 7-6-1-10-3-11-7 0-3 2-6 5-8-8 2-12 6-12 12 0 9 11 11 19 11-5 3-12 4-20 3 5 3 16 5 26 1 6-2 9-6 9-11 0-11-14-19-25-13Z" fill="#FF8100" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <rect width={64} height={64} rx={14} fill="#366994" />
      <path d="M34 12c-12 0-11 6-11 6v7h11v3H19s-7-1-7 11c0 13 9 13 9 13h5v-8s0-7 7-7h12s7 1 7-11c0-12-7-14-7-14h-11v3h8v4H23v-5s-1-7 11-7h2v-6h-2Z" fill="#FFDA4C" />
    </svg>
  ),
  html5: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <path d="M12 8h40l-5 44-15 4-15-4L12 8Z" fill="#E96228" />
      <path d="M21 18h22l-1 8H30l1 6h10l-1 10-8 2-8-2-1-8h6l1 4 3 1 3-1 1-4H23l-2-16Z" fill="#fff" />
    </svg>
  ),
  css3: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <path d="M12 8h40l-5 44-15 4-15-4L12 8Z" fill="#2862E9" />
      <path d="M21 18h22l-1 8H30l1 6h10l-1 10-8 2-8-2-1-8h6l1 4 3 1 3-1 1-4H23l-2-16Z" fill="#fff" />
    </svg>
  ),
  sql: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <ellipse cx={32} cy={18} rx={20} ry={8} fill="#2D87C9" />
      <path d="M12 18v20c0 4 9 8 20 8s20-4 20-8V18" fill="#2D87C9" />
      <ellipse cx={32} cy={38} rx={20} ry={8} fill="#246AA1" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <circle cx={32} cy={32} r={6} fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth={3} fill="none">
        <ellipse cx={32} cy={32} rx={20} ry={8} />
        <ellipse cx={32} cy={32} rx={20} ry={8} transform="rotate(60 32 32)" />
        <ellipse cx={32} cy={32} rx={20} ry={8} transform="rotate(120 32 32)" />
      </g>
    </svg>
  ),
  "next.js": (
    <svg viewBox="0 0 64 64" aria-hidden>
      <circle cx={32} cy={32} r={28} fill="#000" />
      <path d="M34 44 25 28v16h-4V20h6l10 16V20h4v24h-7Z" fill="#fff" />
    </svg>
  ),
  "tailwind css": (
    <svg viewBox="0 0 64 64" aria-hidden>
      <rect width={64} height={64} rx={14} fill="#0F172A" />
      <path d="M20 28c4-8 8-12 13-12 7 0 10 8 14 9 3 .5 5-.5 7-3-2 8-9 12-13 12-7 0-10-8-14-9-3-.5-5 .5-7 3Zm-8 14c4-8 8-12 13-12 7 0 10 8 14 9 3 .5 5-.5 7-3-2 8-9 12-13 12-7 0-10-8-14-9-3-.5-5 .5-7 3Z" fill="#38BDF8" />
    </svg>
  ),
  bootstrap: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <rect width={64} height={64} rx={14} fill="#712CF9" />
      <text x={20} y={44} fontSize={32} fontFamily="Inter, Arial" fill="#fff" fontWeight={700}>B</text>
    </svg>
  ),
  node: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <path d="M32 6 10 18v28l22 12 22-12V18L32 6Z" fill="#5FA04E" />
      <text x={23} y={40} fontSize={18} fontFamily="Inter, Arial" fill="#fff" fontWeight={700}>Node</text>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <rect x={8} y={26} width={10} height={10} fill="#1D63ED" />
      <rect x={20} y={26} width={10} height={10} fill="#1D63ED" />
      <rect x={32} y={26} width={10} height={10} fill="#1D63ED" />
      <rect x={32} y={14} width={10} height={10} fill="#1D63ED" />
      <rect x={20} y={14} width={10} height={10} fill="#1D63ED" />
      <rect x={8} y={14} width={10} height={10} fill="#1D63ED" />
      <path d="M12 42c4 3 9 4 15 4h14c9 0 16-6 18-15" stroke="#1D63ED" strokeWidth={4} fill="none" />
    </svg>
  ),
  kubernetes: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <circle cx={32} cy={32} r={26} stroke="#3970E4" strokeWidth={4} fill="none" />
      <path d="M32 10v22l17 6" stroke="#3970E4" strokeWidth={4} fill="none" />
      <path d="M32 10v22l-17 6" stroke="#3970E4" strokeWidth={4} fill="none" />
    </svg>
  ),
  aws: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <rect width={64} height={64} rx={14} fill="#1B1F23" />
      <text x={14} y={42} fontSize={30} fontFamily="Inter, Arial" fill="#fff" fontWeight={700}>AWS</text>
    </svg>
  ),
  azure: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <rect width={64} height={64} rx={14} fill="#0078D4" />
      <path d="M18 50 30 14l10 20H28l12 16" stroke="#fff" strokeWidth={4} fill="none" strokeLinecap="round" />
    </svg>
  ),
  gcp: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <circle cx={32} cy={32} r={28} fill="#EA4335" />
      <path d="M32 20v16l10 10" stroke="#fff" strokeWidth={6} fill="none" strokeLinecap="round" />
    </svg>
  ),
  tensorflow: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <path d="M14 26 32 16l18 10-18 10-18-10Zm18 10v22" stroke="#FF6F00" strokeWidth={6} strokeLinecap="round" fill="none" />
    </svg>
  ),
  pytorch: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <circle cx={32} cy={32} r={26} stroke="#EE4C2C" strokeWidth={6} fill="none" />
      <circle cx={42} cy={22} r={6} fill="#EE4C2C" />
    </svg>
  ),
  // PostgreSQL icon (single key; 'postgres' alias handled in normalize())
  postgresql: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <ellipse cx={32} cy={16} rx={20} ry={8} fill="#336791" />
      <path d="M12 16v20c0 5 9 10 20 10s20-5 20-10V16" fill="#336791" />
      <ellipse cx={32} cy={36} rx={20} ry={8} fill="#255076" />
    </svg>
  ),
  mysql: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <ellipse cx={32} cy={20} rx={22} ry={10} fill="#00758F" />
      <path d="M10 20v18c0 6 10 12 22 12s22-6 22-12V20" fill="#00758F" />
      <ellipse cx={32} cy={38} rx={22} ry={10} fill="#00627A" />
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 64 64" aria-hidden>
      <path d="M32 8c-6 10-9 19-9 26 0 9 4 18 9 22 5-4 9-13 9-22 0-7-3-16-9-26Z" fill="#13AA52" />
      <path d="M32 8v40" stroke="#fff" strokeWidth={4} strokeLinecap="round" />
    </svg>
  ),
  "ui/ux design": (
    <svg viewBox="0 0 64 64" aria-hidden>
      <rect width={64} height={64} rx={12} fill="#0f172a" />
      <rect x={8} y={18} width={48} height={28} rx={6} fill="#111827" />
      <text x={32} y={36} fontSize={10} fontFamily="Inter, Arial" fill="#F8FAFC" fontWeight={700} textAnchor="middle">UI/UX</text>
    </svg>
  ),
};

// Normalize name to key
function normalize(name: string): string {
  return name.toLowerCase().replace(/\.js$/,"").replace(/\s+sdk$/,"")
    .replace(/react native/, 'react')
    .replace(/postgres(ql)?/, 'postgresql');
}

// Map skill names to their image paths (local images)
const SKILL_IMAGES: Record<string, string> = {
  javascript: "/images/skills/javascript.svg",
  typescript: "/images/skills/typescript.svg",
  python: "/images/skills/python.svg",
  java: "/images/skills/java.svg",
  c: "/images/skills/c.png",
  html5: "/images/skills/html.svg",
  css3: "/images/skills/css.svg",
  sql: "/images/skills/sql.svg",
  react: "/images/skills/react.png",
  "next.js": "/images/skills/nextjs.png",
  "tailwind css": "/images/skills/tailwind.png",
  bootstrap: "/images/skills/bootstrap.png",
  node: "/images/skills/nodejs.png",
  docker: "/images/skills/docker.png",
  kubernetes: "/images/skills/kubernetes.png",
  aws: "/images/skills/aws.png",
  azure: "/images/skills/azure.png",
  gcp: "/images/skills/gcp.png",
  tensorflow: "/images/skills/tensorflow.png",
  pytorch: "/images/skills/pytorch.png",
  postgresql: "/images/skills/postgresql.png",
  mongodb: "/images/skills/mongodb.png",
  mysql: "/images/skills/mysql.png",
  "django": "/images/skills/django.png",
  "flask": "/images/skills/flask.png",
  "express.js": "/images/skills/expressjs.png",
  "spring boot": "/images/skills/springboot.png",
  "jenkins": "/images/skills/jenkins.png",
  "git": "/images/skills/git.png",
  "github": "/images/skills/github.png",
  "scikit-learn": "/images/skills/scikit-learn.png",
  "ci/cd": "/images/skills/CICD.png",
  "power bi": "/images/skills/powerbi.png",
  prisma: "/images/skills/prisma.png",
  tableau: "/images/skills/tableau.png",
  "ui/ux design": "/images/skills/UIUX.png",
};

export function getSkillLogo(name: string): React.ReactNode | undefined {
  const key = normalize(name);
  return ICONS[key];
}

export function getSkillImage(name: string): string | undefined {
  const key = normalize(name);
  return SKILL_IMAGES[key];
}
