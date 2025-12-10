import { EXPERIENCE } from "@/lib/data";

export default function ExperienceTimelineVertical() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* vertical line */}
      <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" aria-hidden />
      <ol className="space-y-12">
        {EXPERIENCE.map((item, idx) => (
          <li key={item.title} className="relative pl-12">
            {/* node */}
            <span className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-white dark:bg-slate-950" aria-hidden>
              <span className="sr-only">{item.title}</span>
            </span>
            <div className="w-full">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                <div className="mt-1 text-sm">
                  <span>
                    {item.companyUrl ? (
                      <a href={item.companyUrl} target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">
                        {item.company}
                      </a>
                    ) : (
                      <span className="font-medium text-primary">{item.company}</span>
                    )}
                  </span>
                  {item.location && (
                    <span className="text-slate-500 dark:text-slate-400"> {"|"} {item.location}</span>
                  )}
                </div>
                <p className="mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{item.period}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  {item.bullets.map(b => (
                    <li key={b} className="flex gap-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="mt-1 flex-shrink-0 text-primary" aria-hidden>
                        <path d="M4 12L20 4l-6 8 6 8Z" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
