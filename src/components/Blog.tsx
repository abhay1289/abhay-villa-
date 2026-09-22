import { posts } from "@/lib/content";
import { CoverImage } from "./CoverImage";
import { Eyebrow } from "./Eyebrow";
import { CalendarIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Blog() {
  return (
    <section className="section blog-section" id="blog">
      <div className="wrap blog-layout">
        <Reveal className="blog-head">
          <Eyebrow>Insights & ideas</Eyebrow>
          <h2 className="section-title">How to plan your perfect tiny home</h2>
          <a className="pill pill-dark" href="#blog">
            See All Blog
          </a>
        </Reveal>
        <div className="blog-list">
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 80}>
              <a className="blog-card" href="#contact">
                <div className="blog-copy">
                  <time dateTime={post.dateTime}>
                    <CalendarIcon />
                    {post.date}
                  </time>
                  <h3 className="card-title">{post.title}</h3>
                  <p>{post.copy}</p>
                </div>
                <div className="media">
                  <CoverImage src={post.image} alt="" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
