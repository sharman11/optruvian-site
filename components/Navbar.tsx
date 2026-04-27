"use client";

import { useEffect, useState } from "react";

const LogoMark = () => (
  <div className="n-logo-mark" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.25" />
      <path
        className="n-logo-spark"
        d="M12 4.2 C 12.45 10.7, 13.3 11.55, 19.8 12 C 13.3 12.45, 12.45 13.3, 12 19.8 C 11.55 13.3, 10.7 12.45, 4.2 12 C 10.7 11.55, 11.55 10.7, 12 4.2 Z"
        fill="currentColor"
      />
    </svg>
  </div>
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "nav-scrolled" : ""}>
      <a href="/" className="n-logo">
        <LogoMark />
        <span className="n-logo-name">Optruvian</span>
      </a>
      <div className="n-right">
        <ul className="n-links">
          <li><a href="/#products">Products</a></li>
          <li><a href="/#mission">About</a></li>
          <li><a href="/#process">How we build</a></li>
        </ul>
        <a href="mailto:hello@optruvian.tech" className="n-btn-cta">Contact us</a>
      </div>
    </nav>
  );
}
