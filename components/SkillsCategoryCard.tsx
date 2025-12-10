import SkillBadge from "./SkillBadge";

export default function SkillsCategoryCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon?: React.ReactNode;
  items: string[];
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 text-primary ring-1 ring-slate-200/60 transition-colors duration-200 group-hover:from-primary/25 group-hover:to-accent/25 dark:from-primary/20 dark:to-accent/20 dark:ring-slate-700/60" aria-hidden>
          {/* Icon slot uses currentColor for strokes/fills */}
          <span className="[&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-current">
            {icon ?? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/></svg>
            )}
          </span>
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <SkillBadge key={s} label={s} />
        ))}
      </div>
    </div>
  );
}
