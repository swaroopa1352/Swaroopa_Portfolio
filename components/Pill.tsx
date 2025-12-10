type Props = { label: string };

export default function Pill({ label }: Props) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
      {label}
    </span>
  );
}
