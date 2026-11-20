import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

export default function Reveal({ children, className }: Props) {
  // Keep content visible before hydration and when JavaScript is unavailable.
  return <div className={className}>{children}</div>;
}
