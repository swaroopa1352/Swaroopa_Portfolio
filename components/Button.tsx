import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { clsx } from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ variant = "primary", className, children, ...rest }: PropsWithChildren<Props>) {
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-indigo-700 border border-indigo-600 dark:border-indigo-500"
      : "bg-transparent border border-slate-300 text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800";
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus-visible:outline-none",
        styles,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
