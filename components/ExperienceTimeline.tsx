import { EXPERIENCE } from "@/lib/data";

// Renders vertical timeline for experience items
export default function ExperienceTimeline() {
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-slate-800" aria-hidden />
      <ul className="space-y-8">
        {EXPERIENCE.map((item, idx) => (
          <li key={item.title} className="relative pl-12">
            <span
              className="absolute left-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-primary dark:border-slate-700 dark:bg-slate-900"
              aria-hidden
            >
              {idx + 1}
            </span>
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-medium text-slate-900 dark:text-slate-100">{item.title}</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">{item.period}</span>
              </div>
              {item.bullets && item.bullets.length > 0 && (
                <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
