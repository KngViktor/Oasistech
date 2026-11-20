/**
 * Oasis North Digital mark: a north star above a peak, over still water.
 * Inline SVG so it inherits the theme accent and needs no network request.
 */
export function BrandMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <rect width="64" height="64" rx="16" fill="var(--bg-card)" />
      <rect
        x="0.75"
        y="0.75"
        width="62.5"
        height="62.5"
        rx="15.25"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      {/* North star */}
      <path
        d="M32 9 L34.2 15.8 L41 18 L34.2 20.2 L32 27 L29.8 20.2 L23 18 L29.8 15.8 Z"
        fill="var(--accent)"
      />
      {/* Peak */}
      <path
        d="M12 46 L26 30 L32 37 L38 30 L52 46"
        fill="none"
        stroke="var(--text)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Water */}
      <path
        d="M14 53 Q20 49.5 26 53 T38 53 T50 53"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Text wordmark used where a compact brand label fits better than the mark. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={className}>
      Oasis North<span className="text-accent">.</span>
    </span>
  );
}
