"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import { Brand } from "./Brand";

const desktopLinks = nav.pages.filter((item) => item.href !== "#top");

export function Nav() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const read = () => {
      setLight(hero.getBoundingClientRect().bottom <= 88);
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read, { passive: true });
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header${light ? " is-light" : ""}`}>
        <a className="brand" href="#top" aria-label="Abhay Villa home">
          <Brand />
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          <button
            className="nav-pill"
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen(true)}
          >
            All Pages
            <span className="chevron" aria-hidden="true" />
          </button>
          {desktopLinks.map((item) => (
            <a key={item.href} className="nav-pill" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="pill pill-dark call-pill" href={nav.phoneHref}>
          Call us: {nav.phone}
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
        >
          All Pages
          <span className="burger" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>
      </header>

      {open ? (
        <div
          className="menu-overlay"
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="All pages"
        >
          <button
            className="menu-backdrop"
            type="button"
            aria-label="Close menu"
            onClick={close}
          />
          <aside className="menu-panel">
            <div className="menu-head">
              <a className="brand" href="#top" onClick={close}>
                <Brand />
              </a>
              <button
                className="menu-close"
                type="button"
                onClick={close}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <nav>
              {nav.pages.map((item) => (
                <a
                  key={item.href}
                  className="menu-link"
                  href={item.href}
                  onClick={close}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a className="menu-phone pill pill-dark" href={nav.phoneHref}>
              Call us: {nav.phone}
            </a>
          </aside>
        </div>
      ) : null}
    </>
  );
}
