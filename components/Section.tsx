import { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  titleClassName?: string; // optional custom classes for heading
};

export default function Section({ id, title, children, className, titleClassName }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-16 md:py-24 ${className ?? ""}`}>
      <div className="container">
        <h2
          id={`${id}-title`}
          className={`font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6 ${titleClassName ?? ""}`}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
