type Props = {
  title: string;
  period: string;
  summary: string;
};

export default function TimelineItem({ title, period, summary }: Props) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-accent" aria-hidden />
      <div className="rounded-md border border-slate-200 dark:border-slate-800 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">{period}</span>
        </div>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{summary}</p>
      </div>
    </div>
  );
}
