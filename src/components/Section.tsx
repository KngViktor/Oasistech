import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-border px-6 py-20 sm:px-10 lg:px-12 lg:py-24 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl">
        {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
        {title && (
          <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
        )}
        <div className={eyebrow || title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
