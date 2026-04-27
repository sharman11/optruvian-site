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

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <a href="/" className="n-logo" style={{ textDecoration: "none" }}>
              <LogoMark />
              <span className="n-logo-name">Optruvian</span>
            </a>
            <p className="fb-desc">AI products built for real people. Simple by design, useful by default.</p>
          </div>
          <div className="fc">
            <div className="fc-h">Products</div>
            <ul>
              <li><a href="https://www.hotlist-jobs.com/" target="_blank" rel="noopener noreferrer"><span className="fc-product-link"><span className="fc-pdot" style={{ background: "var(--p1)" }} />Hotlist Jobs · Tech careers</span></a></li>
              <li><a href="#"><span className="fc-product-link"><span className="fc-pdot" style={{ background: "var(--p3)" }} />Kerb · UK Home</span></a></li>
              <li><a href="#"><span className="fc-product-link"><span className="fc-pdot" style={{ background: "var(--p2)" }} />Stashbox · Savings</span></a></li>
              <li><a href="#"><span className="fc-product-link"><span className="fc-pdot" style={{ background: "var(--p4)" }} />Lumen · Learning</span></a></li>
            </ul>
          </div>
          <div className="fc">
            <div className="fc-h">Company</div>
            <ul>
              <li><a href="/#mission">About</a></li>
              <li><a href="#"><span className="fc-soon">Blog <span className="fc-soon-tag">Coming soon</span></span></a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          <div className="fc">
            <div className="fc-h">Legal</div>
            <ul>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms</a></li>
              <li><a href="mailto:hello@optruvian.tech">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Optruvian Tech, Inc. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#">X</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">Optruvian</div>
    </footer>
  );
}
