"use client";

import { useRef, useState } from "react";
import { testimonials } from "@/lib/content";
import { Eyebrow } from "./Eyebrow";
import { PlayMark, Stars } from "./icons";
import { Reveal } from "./Reveal";

export function Testimonials() {
  const videos = useRef<Array<HTMLVideoElement | null>>([]);
  const [playing, setPlaying] = useState<string | null>(null);

  const play = (name: string, index: number) => {
    videos.current.forEach((video, videoIndex) => {
      if (!video) return;
      if (videoIndex === index) {
        video.play().catch(() => undefined);
        return;
      }
      video.pause();
      video.currentTime = 0;
    });
    setPlaying(name);
  };

  return (
    <section className="section testimonials" id="homeowners">
      <div className="wrap">
        <Reveal>
          <header className="testi-head">
            <Eyebrow>Our Homeowners</Eyebrow>
            <h2 className="section-title">What our happy homeowners say</h2>
          </header>
        </Reveal>
        <div className="testi-grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 90}>
              <article className="testi-card">
                <div className="testi-media">
                  <video
                    ref={(node) => {
                      videos.current[index] = node;
                    }}
                    src={item.video.src}
                    poster={item.video.poster}
                    muted
                    playsInline
                    loop
                    preload="none"
                    onPlay={() => setPlaying(item.name)}
                  />
                  {playing !== item.name ? (
                    <button
                      className="play-btn"
                      type="button"
                      aria-label={`Play ${item.name} testimonial`}
                      onClick={() => play(item.name, index)}
                    >
                      <PlayMark />
                    </button>
                  ) : null}
                </div>
                <p className="testi-quote">
                  “{item.quote.replace(/^["“]|["”]$/g, "")}”
                </p>
                <div className="person">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.avatar} alt="" width={44} height={44} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                  <Stars className="stars" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
