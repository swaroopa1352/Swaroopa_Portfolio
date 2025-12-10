import { EXPERIENCE } from "@/lib/data";

export default function ExperienceTimelineHorizontal() {
  return (
    <div className="relative">
      {/* central horizontal line */}
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 h-px bg-slate-200 dark:bg-slate-800" aria-hidden />

      <div className="no-scrollbar flex snap-x overflow-x-auto gap-12 py-10">
        {EXPERIENCE.map((item, idx) => {
          const pos = idx % 2 === 0 ? "mb-16 -translate-y-4" : "mt-16 translate-y-4";
          return (
            <div key={item.title} className="relative snap-center shrink-0 w-[320px] sm:w-[360px]">
              {/* timeline dot */}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent ring-4 ring-white dark:ring-slate-950" aria-hidden />

              <div className={`relative ${pos}`}>
                <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-medium text-slate-900 dark:text-slate-100">{item.title}</h3>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{item.period}</span>
                  </div>
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-2 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      {item.bullets.map((bullet, idx2) => (
                        <li key={idx2} className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
