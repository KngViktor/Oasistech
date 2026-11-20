"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = { value: number; suffix?: string; duration?: number };

export default function Counter({ value, suffix = "", duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  // Start at the real value, not 0: this is what search crawlers, slow
  // connections, and no-JS visitors actually see, since it's baked into the
  // server-rendered HTML. The count-up animation is a bonus for capable
  // browsers, not something the real number should ever depend on.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
