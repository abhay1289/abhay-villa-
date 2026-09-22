"use client";

import { useRef } from "react";
import { projects } from "@/lib/content";
import { CoverImage } from "./CoverImage";
import { Eyebrow } from "./Eyebrow";
import { ArrowLeft, ArrowRight } from "./icons";
import { Reveal } from "./Reveal";

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const amount = (card?.getBoundingClientRect().width ?? 320) + 10;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="section projects-section" id="projects">
      <div className="wrap">
        <div className="projects-head">
          <Reveal>
            <Eyebrow>Our Projects</Eyebrow>
            <h2 className="section-title projects-title">
              Creating spaces that feel like home
            </h2>
          </Reveal>
          <div className="icon-row">
            <button
              className="icon-btn"
              type="button"
              aria-label="Previous projects"
              onClick={() => scroll(-1)}
            >
              <ArrowLeft />
            </button>
            <button
              className="icon-btn"
              type="button"
              aria-label="Next projects"
              onClick={() => scroll(1)}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className="project-track" ref={trackRef}>
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="media">
                <CoverImage src={project.image} alt={project.title} />
              </div>
              <div className="project-copy">
                <p className="tag">{project.tag}</p>
                <div>
                  <h3 className="card-title">{project.title}</h3>
                  <p>{project.copy}</p>
                </div>
                <a className="project-link" href="#contact">
                  View Project <ArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
