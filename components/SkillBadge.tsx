type Props = { label: string };

export default function SkillBadge({ label }: Props) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 text-xs text-slate-700 dark:text-slate-200">
      {label}
    </span>
  );
}
