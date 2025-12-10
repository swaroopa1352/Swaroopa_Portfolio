import type { Education } from "@/lib/data";

export default function EducationPanel({ items }: { items: Education[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 10l9-5 9 5-9 5-9-5Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M5 12v5c0 1.1 3.58 2 7 2s7-.9 7-2v-5" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </span>
        <h4 className="font-display text-xl">Education</h4>
      </div>

      <div className="space-y-6">
        {items.map((it, idx) => (
          <div key={`${it.program}-${idx}`} className="relative pl-4">
            <span className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-slate-200 dark:bg-slate-700" aria-hidden />
            <div className="mb-1 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span>{it.period}</span>
              {it.gpa && (
                <span className="ml-auto inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                  GPA: {it.gpa}
                </span>
              )}
            </div>
            <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{it.program}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{it.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
