import type { ReactNode } from "react";
import { HouseMark } from "./icons";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow">
      <HouseMark />
      {children}
    </p>
  );
}
