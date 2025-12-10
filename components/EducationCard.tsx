import Pill from "./Pill";
import type { Education } from "@/lib/data";

export default function EducationCard({ item }: { item: Education }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">{item.level}</p>
      <h4 className="text-lg font-semibold leading-snug text-slate-900 dark:text-slate-100">{item.program}</h4>
      <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
        <span className="inline-flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 10l9-5 9 5-9 5-9-5Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M5 12v5c0 1.1 3.58 2 7 2s7-.9 7-2v-5" stroke="currentColor" strokeWidth="2"/>
          </svg>
          {item.institution}
        </span>
        <span className="inline-flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2"/>
          </svg>
          {item.period}
        </span>
        {item.gpa && (
          <span className="ml-auto inline-flex items-center rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            GPA: {item.gpa}
          </span>
        )}
      </div>
      {item.coursework && item.coursework.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Key Coursework:</p>
          <div className="flex flex-wrap gap-2">
            {item.coursework.map((c) => (
              <Pill key={c} label={c} />
            ))}
          </div>
        </div>
      )}
      {item.details && item.details.length > 0 && (
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 dark:text-slate-300">
          {item.details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
