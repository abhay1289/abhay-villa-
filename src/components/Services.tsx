import { assets, services } from "@/lib/content";
import { CoverImage } from "./CoverImage";
import { Eyebrow } from "./Eyebrow";
import { ArrowRight } from "./icons";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="wrap">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h2 className="section-title services-title">
            Building better homes with a simple process
          </h2>
        </Reveal>

        <div className="services-body">
          <Reveal className="services-photos">
            <div className="services-photo services-photo-a">
              <CoverImage
                src={assets.services[0]}
                alt="Modular home exterior"
              />
            </div>
            <div className="services-photo services-photo-b">
              <CoverImage
                src={assets.services[1]}
                alt="Bright living interior"
              />
            </div>
          </Reveal>

          <Reveal delay={80} className="services-side">
            <div className="service-list">
              {services.map((item) => (
                <a key={item} className="service-link" href="#contact">
                  <ArrowRight />
                  {item}
                </a>
              ))}
            </div>
            <a className="pill pill-dark" href="#contact">
              View All Services
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
