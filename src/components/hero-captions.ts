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
    title: "Modern homes for everyday living",
    sub: "Thoughtfully designed modular and tiny homes with smart spaces and lasting quality.",
  },
  {
    from: 0.15,
    to: 0.27,
    align: "left",
    title: "Smart spaces, simple plans",
    sub: "Practical layouts that make every room feel open, useful, and easy to live in.",
  },
  {
    from: 0.3,
    to: 0.43,
    align: "right",
    title: "Quality in every detail",
    sub: "Reliable materials and careful craft, from the first plan to the final finish.",
  },
  {
    from: 0.46,
    to: 0.56,
    align: "left",
    title: "Built around your life",
    sub: "A home shaped by how you live, not by leftover space.",
  },
  {
    from: 0.59,
    to: 0.71,
    align: "center",
    title: "Comfort without the extra",
    sub: "Light, warmth, and function in a home that stays simple to enjoy.",
  },
  {
    from: 0.74,
    to: 0.86,
    align: "right",
    title: "More room where it matters",
    sub: "Every inch planned for comfort, storage, and the way your day actually moves.",
  },
  {
    from: 0.89,
    to: 1,
    align: "center",
    title: "Start your Modora home",
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
