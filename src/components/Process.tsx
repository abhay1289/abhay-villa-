"use client";

import { useEffect, useRef } from "react";
import { useRafScroll } from "@/hooks/useRafScroll";
import { assets, processSteps } from "@/lib/content";
import { CoverImage } from "./CoverImage";
import { Eyebrow } from "./Eyebrow";

export function Process() {
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useRafScroll(trackRef, (track) => {
    const stage = stageRef.current;
    if (!stage) return;

    if (reducedRef.current) {
      stage.style.setProperty("--rise", "1");
      return;
    }

    const rect = track.getBoundingClientRect();
    const travel = rect.height - window.innerHeight;
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    if (travel <= 0) {
      stage.style.setProperty("--rise", "1");
      return;
    }

    const progress = Math.max(0, Math.min(1, -rect.top / travel));
    const raw = Math.max(0, Math.min(1, (progress - 0.34) / 0.5));
    stage.style.setProperty("--rise", (1 - (1 - raw) * (1 - raw)).toFixed(4));
  });

  return (
    <section className="process-track" id="process" ref={trackRef}>
      <div className="process-sticky">
        <div className="wrap process-inner">
          <header className="process-title">
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="section-title">
              An easy approach to creating better homes
            </h2>
          </header>

          <div className="process-stage" ref={stageRef}>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article
                  key={step.n}
                  className={`process-card${index === 2 ? " is-lift" : ""}`}
                >
                  <h3 className="process-num">{step.n}</h3>
                  <div>
                    <h4 className="card-title">{step.title}</h4>
                    <p>{step.copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="process-photo">
              <CoverImage
                src={assets.process}
                alt="Modular home in a mountain landscape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
