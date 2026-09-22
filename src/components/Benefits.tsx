"use client";

import { useRef, useState } from "react";
import { useRafScroll } from "@/hooks/useRafScroll";
import { assets, benefits } from "@/lib/content";
import { CoverImage } from "./CoverImage";

export function Benefits() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const item = benefits[index];

  useRafScroll(ref, (node) => {
    const rect = node.getBoundingClientRect();
    const travel = rect.height - window.innerHeight;
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;

    const progress =
      travel <= 0 ? 0 : Math.max(0, Math.min(1, -rect.top / travel));
    node.style.setProperty("--p", progress.toFixed(4));

    const next = Math.min(
      benefits.length - 1,
      Math.floor(progress * benefits.length),
    );
    setIndex((current) => (current === next ? current : next));
  });

  return (
    <section className="benefits-track" id="benefits" ref={ref}>
      <div className="benefits-sticky">
        <CoverImage
          className="benefits-bg"
          src={assets.benefits}
          alt=""
        />
        <div className="benefit-stage">
          <article className="benefit-card">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.copy}</p>
          </article>
          <svg
            className="benefit-line"
            viewBox="0 0 240 170"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 8 C 90 20, 150 90, 228 158"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="1.4"
              strokeDasharray="3 6"
            />
          </svg>
          <div className="benefit-orbit" aria-hidden="true">
            <span className="benefit-orbit-ring" />
            <span className="benefit-orbit-fill" />
          </div>
        </div>
      </div>
    </section>
  );
}
