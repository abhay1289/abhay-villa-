export type Caption = {
  from: number;
  to: number;
  align: "center" | "left" | "right";
  title: string;
  sub: string;
  cta?: string;
};

export const TRACK_PX = 11_000;

export const CAPTIONS: Caption[] = [
  {
    from: 0,
    to: 0.12,
    align: "center",
    title: "Homes made for real days",
    sub: "Abhay Villa builds modular and tiny homes with clear plans, honest materials, and rooms that work.",
  },
  {
    from: 0.15,
    to: 0.27,
    align: "left",
    title: "Every room earns its place",
    sub: "Open layouts, hidden storage, and paths that stay useful long after the first walkthrough.",
  },
  {
    from: 0.3,
    to: 0.43,
    align: "right",
    title: "Craft you can live with",
    sub: "Solid materials and a careful finish, from the first drawing to the last fixture.",
  },
  {
    from: 0.46,
    to: 0.56,
    align: "left",
    title: "Shaped around your life",
    sub: "A home planned for your people and your routines — not leftover space.",
  },
  {
    from: 0.59,
    to: 0.71,
    align: "center",
    title: "Comfort, kept simple",
    sub: "Light, warmth, and rooms that stay easy to keep, without the extra you never use.",
  },
  {
    from: 0.74,
    to: 0.86,
    align: "right",
    title: "Space where life happens",
    sub: "More room at the table and the door. Less wasted hallway in between.",
  },
  {
    from: 0.89,
    to: 1,
    align: "center",
    title: "Start your Abhay Villa home",
    sub: "Tell us how you live, and we’ll help you plan a home that fits.",
    cta: "Contact Now",
  },
];

export function clamp01(value: number) {
  return Math.max(0, Math.min(1, value));
}

export function captionOpacity(progress: number, caption: Caption) {
  if (progress < caption.from - 0.02 || progress > caption.to + 0.02) {
    return 0;
  }

  const span = caption.to - caption.from;
  const fadeIn =
    caption.from <= 0.001
      ? 1
      : clamp01((progress - caption.from) / (span * 0.22));
  const fadeOut =
    caption.to >= 0.999
      ? 1
      : 1 - clamp01((progress - (caption.to - span * 0.22)) / (span * 0.22));

  return Math.max(0, Math.min(fadeIn, fadeOut));
}
