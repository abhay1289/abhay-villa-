import { nav } from "@/lib/content";
import { Brand } from "./Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <a
            className="brand footer-logo"
            href="#top"
            aria-label="Abhay Villa home"
          >
            <Brand />
          </a>
          {nav.footer.map((column) => (
            <div key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((item) => (
                <a key={item.label} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="legal">
          <p>
            © 2026 All Right Reserved by Abhay Villa
            {" · "}
            <a
              href="https://www.instagram.com/designby.abhay/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by designby.abhay
            </a>
          </p>
          <p>
            This website is operated by Abhay Villa, a modular and tiny home
            builder specializing in thoughtfully designed, high-quality homes.
            Our services are provided in accordance with applicable local
            building codes, regulations, and industry standards. All information
            presented on this website is for general informational purposes and
            does not constitute legal, financial, architectural, or construction
            advice. Project costs, timelines, specifications, and availability
            may vary based on location, design, materials, site conditions, and
            applicable regulations.
          </p>
        </div>
      </div>
    </footer>
  );
}
