"use client";

import { useEffect, useRef, type RefObject } from "react";

export function useRafScroll(
  target: RefObject<HTMLElement | null>,
  update: (node: HTMLElement) => void,
) {
  const updateRef = useRef(update);

  useEffect(() => {
    updateRef.current = update;
  });

  useEffect(() => {
    const node = target.current;
    if (!node) return;

    let frame = 0;

    const read = () => {
      frame = 0;
      if (target.current) updateRef.current(target.current);
    };

    const schedule = () => {
      if (frame) return;
      frame = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [target]);
}
