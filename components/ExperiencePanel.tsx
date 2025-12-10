type ExperienceItem = {
  title: string;
  period: string;
  summary: string;
};

export default function ExperiencePanel({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="space-y-6">
        {items.map((it, idx) => (
          <div key={`${it.title}-${idx}`} className="relative pl-4">
            <span className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-slate-200 dark:bg-slate-700" aria-hidden />
            <div className="mb-1 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <span className="ml-auto inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {it.period}
              </span>
            </div>
            <p className="text-base font-semibold text-slate-900 dark:text-slate-100">{it.title}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{it.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
