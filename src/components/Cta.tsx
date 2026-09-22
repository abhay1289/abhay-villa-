import { assets, guarantees, nav } from "@/lib/content";
import { CoverImage } from "./CoverImage";
import { CertIcon, WarrantyIcon, YearsIcon } from "./icons";

const icons = [CertIcon, YearsIcon, WarrantyIcon];

export function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="cta-panel">
        <CoverImage className="cta-photo" src={assets.cta} alt="" />
        <div className="cta-blur" />
        <div className="cta-copy">
          <h2 className="section-title">Homes designed just for your life</h2>
          <p>
            Thoughtfully designed modular and tiny homes built around your
            lifestyle
          </p>
          <a className="pill pill-dark" href={nav.phoneHref}>
            Contact Now
          </a>
        </div>
        <div className="guarantees">
          {guarantees.map((item, index) => {
            const Icon = icons[index] ?? CertIcon;
            return (
              <article key={item.title}>
                <Icon />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
