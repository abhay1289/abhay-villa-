import { aboutCards } from "@/lib/content";
import { CoverImage } from "./CoverImage";
import { Eyebrow } from "./Eyebrow";

function Card({
  title,
  copy,
  image,
  decorative = false,
}: {
  title: string;
  copy: string;
  image: string;
  decorative?: boolean;
}) {
  return (
    <article className="about-card" aria-hidden={decorative || undefined}>
      <CoverImage src={image} alt="" />
      <div>
        <h3 className="card-title">{title}</h3>
        <p>{copy}</p>
      </div>
    </article>
  );
}

export function About() {
  const loop = [...aboutCards, ...aboutCards];

  return (
    <section className="section about-section" id="about">
      <div className="wrap">
        <div className="about-head">
          <Eyebrow>About Modora</Eyebrow>
          <h2 className="section-title about-lead">
            We create modern homes with smart spaces, simple designs, and lasting
            quality for everyday living.
          </h2>
        </div>
      </div>
      <div className="about-marquee">
        <div className="about-track">
          {loop.map((card, index) => (
            <Card
              key={`${card.title}-${index}`}
              {...card}
              decorative={index >= aboutCards.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
