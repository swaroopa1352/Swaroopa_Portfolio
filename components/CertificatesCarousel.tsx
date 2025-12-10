"use client";

import type { Certification } from "@/lib/data";

// Grid-based certificates display matching provided screenshot (icon circle, title, issuer, date, verify link)
export default function CertificatesCarousel({ items }: { items: Certification[] }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-2">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((c, idx) => (
          <article
            key={`${c.title}-${idx}`}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              {/* Ribbon / award icon */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <circle cx="12" cy="8" r="5" />
                <path d="m9 14-2 7 5-3 5 3-2-7" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              {c.title}
            </h3>
            {c.issuer && (
              <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">Issued by {c.issuer}</p>
            )}
            {c.period && (
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{c.period}</p>
            )}
            {c.url && (
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Verify credential ${c.title}`}
                className="mt-6 inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Verify →
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
