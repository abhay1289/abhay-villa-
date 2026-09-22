"use client";

import { useEffect, useRef } from "react";
import { CAPTIONS, TRACK_PX, captionOpacity, clamp01 } from "./hero-captions";

const UNLOCK_EVENTS = [
  "pointerdown",
  "touchstart",
  "wheel",
  "keydown",
  "scroll",
] as const;

export function Hero() {
  const trackRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const captionRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let progress = 0;
    let unlocked = false;
    let frame = 0;
    let seeking = false;
    let lastDrawn = -1;
    let lastCaptionKey = "";
    let lastBar = -1;
    let running = true;
    let inView = true;

    const fps = 24;
    const quantize = (seconds: number, duration: number) => {
      const frameIndex = Math.round(seconds * fps);
      return Math.min(duration, Math.max(0, frameIndex / fps));
    };

    const unlock = () => {
      video.muted = true;
      video.playsInline = true;
      const playAttempt = video.play();
      if (playAttempt) {
        playAttempt
          .then(() => {
            video.pause();
            unlocked = true;
          })
          .catch(() => {
            unlocked = true;
          });
      } else {
        try {
          video.pause();
        } catch {
          /* ignore */
        }
        unlocked = true;
      }
    };

    const readProgress = () => {
      progress = clamp01(-track.getBoundingClientRect().top / TRACK_PX);
    };

    const paintCaptions = () => {
      let key = "";
      CAPTIONS.forEach((caption, index) => {
        const node = captionRefs.current[index];
        if (!node) return;
        const opacity = reducedMotion
          ? index === 0
            ? 1
            : 0
          : captionOpacity(progress, caption);
        const rounded = Math.round(opacity * 20) / 20;
        key += `${rounded}|`;
        if (node.dataset.o === String(rounded)) return;
        node.dataset.o = String(rounded);
        node.style.opacity = String(rounded);
        node.style.transform = `translateY(${(1 - rounded) * 26}px)`;
        node.style.pointerEvents = rounded > 0.5 ? "auto" : "none";
      });
      lastCaptionKey = key;
    };

    const seekTo = (target: number) => {
      if (seeking || Math.abs(target - lastDrawn) < 1 / fps) return;
      seeking = true;
      lastDrawn = target;
      try {
        if ("fastSeek" in video && typeof video.fastSeek === "function") {
          video.fastSeek(target);
        } else {
          video.currentTime = target;
        }
      } catch {
        seeking = false;
      }
    };

    const onSeeked = () => {
      seeking = false;
      const duration = video.duration || 0;
      if (duration > 0 && !reducedMotion) {
        const next = quantize(progress * duration, duration);
        if (Math.abs(next - lastDrawn) >= 1 / fps) seekTo(next);
      }
    };

    const tick = () => {
      if (!running) return;

      if (!inView || document.hidden) {
        frame = 0;
        return;
      }

      const duration = video.duration || 0;
      if (reducedMotion) {
        if (lastDrawn !== 0) {
          lastDrawn = 0;
          try {
            video.currentTime = 0;
          } catch {
            /* ignore */
          }
        }
      } else if (duration > 0) {
        seekTo(quantize(progress * duration, duration));
      }

      if (lastCaptionKey === "") paintCaptions();
      else {
        const captionKey = CAPTIONS.map((caption, index) =>
          Math.round(
            (reducedMotion
              ? index === 0
                ? 1
                : 0
              : captionOpacity(progress, caption)) * 20,
          ),
        ).join("|");
        if (captionKey !== lastCaptionKey) paintCaptions();
      }

      const bar = Math.round(progress * 200) / 200;
      if (progressRef.current && bar !== lastBar) {
        lastBar = bar;
        progressRef.current.style.transform = `scaleX(${reducedMotion ? 0 : bar})`;
      }

      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (!running || frame || !inView || document.hidden) return;
      frame = requestAnimationFrame(tick);
    };

    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
        return;
      }
      start();
    };

    void fetch("/experience-v3.mp4", { cache: "force-cache" });
    unlock();

    video.addEventListener("loadedmetadata", unlock);
    video.addEventListener("canplay", unlock);
    video.addEventListener("seeked", onSeeked);
    UNLOCK_EVENTS.forEach((event) =>
      window.addEventListener(event, unlock, { passive: true }),
    );

    window.addEventListener("scroll", readProgress, { passive: true });
    window.addEventListener("resize", readProgress, { passive: true });
    document.addEventListener("visibilitychange", visibility);

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { threshold: 0 },
    );
    io.observe(track);

    readProgress();
    paintCaptions();
    start();

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      io.disconnect();
      video.removeEventListener("loadedmetadata", unlock);
      video.removeEventListener("canplay", unlock);
      video.removeEventListener("seeked", onSeeked);
      UNLOCK_EVENTS.forEach((event) =>
        window.removeEventListener(event, unlock),
      );
      window.removeEventListener("scroll", readProgress);
      window.removeEventListener("resize", readProgress);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  return (
    <>
      <div className="cine-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>

      <section
        id="top"
        ref={trackRef}
        className="cine-hero"
        style={{ height: `calc(100vh + ${TRACK_PX}px)` }}
      >
        <div className="cine-stage">
          <video
            ref={videoRef}
            src="/experience-v3.mp4"
            poster="/frames/00-start.jpg"
            width={1280}
            height={720}
            muted
            playsInline
            autoPlay
            preload="auto"
            disableRemotePlayback
            aria-hidden="true"
          />
          <div className="cine-scrim" />
          {CAPTIONS.map((caption, index) => (
            <div
              key={caption.title}
              className={`cine-cap cine-cap-${caption.align}`}
              ref={(node) => {
                captionRefs.current[index] = node;
              }}
              style={
                index === 0
                  ? {
                      opacity: 1,
                      transform: "translateY(0px)",
                      pointerEvents: "auto",
                    }
                  : undefined
              }
            >
              <h1>{caption.title}</h1>
              <p>{caption.sub}</p>
              {caption.cta ? (
                <a href="#contact" className="cine-cta">
                  {caption.cta} →
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
