import { AuroraBackground } from "@/components/ui/aurora-background";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ArrowRight = ({ size = 13, stroke = "white" }: { size?: number; stroke?: string }) => (
  <svg width={size} height={size} viewBox="0 0 13 13" fill="none">
    <path d="M2 6.5H11M11 6.5L7.5 3M11 6.5L7.5 10" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <AuroraBackground className="hero-aurora" showRadialGradient={false}>
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <div className="ey-dot">
              <svg viewBox="0 0 10 10" fill="none">
                <path d="M5 1L8.5 3V7L5 9L1.5 7V3L5 1Z" stroke="white" strokeWidth="1" strokeLinejoin="round" />
              </svg>
            </div>
            Building AI products that actually get used
          </div>
          <h1 className="hero-h1">
            One company.<br />
            <em>Many tools.</em><br />
            All built to last.
          </h1>
          <p className="hero-sub">
            Optruvian makes AI-powered products for everyday people. Each one solves a real problem. No learning curve. No complexity. No fluff.
          </p>
          <div className="hero-ctas">
            <a href="#products" className="btn-primary">
              Explore our products
              <ArrowRight />
            </a>
            <a href="#mission" className="btn-outline">Our mission</a>
          </div>
          <div className="hero-stats">
            <div className="hs"><div className="hs-n">1</div><div className="hs-l">Product launched</div></div>
            <div className="hs"><div className="hs-n">3</div><div className="hs-l">Coming soon</div></div>
            <div className="hs"><div className="hs-n">2026</div><div className="hs-l">Founded</div></div>
          </div>
        </div>
        </AuroraBackground>
      </section>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <div className="products-hdr">
          <div className="sec-label">Our products</div>
          <h2 className="sec-title">Tools people reach for<br /><em>every single day</em></h2>
          <p className="sec-desc">Each product starts with a real frustration, something people waste time on, and replaces it with something that just works.</p>
        </div>
        <div className="product-list">

          {/* HOTLIST */}
          <div className="product-card">
            <div className="pc-info">
              <div className="pc-top">
                <div className="pc-badge" style={{ background: "var(--p1-lt)", color: "var(--p1)", border: "1px solid rgba(37,99,235,.2)" }}>
                  <span className="pc-badge-dot" style={{ background: "var(--p1)" }} />
                  Tech Jobs
                </div>
                <div className="pc-name" style={{ color: "var(--p1)" }}>Hotlist Jobs</div>
                <div className="pc-tagline" style={{ color: "var(--sub)" }}>The freshest tech jobs. Period.</div>
                <p className="pc-desc">Hotlist aggregates live roles from Greenhouse, Lever, Workable and more, then automatically archives anything older than 14 days. No ghost listings, no dead links, no scrolling through posts from three months ago.</p>
              </div>
              <div className="pc-features">
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p1-lt)", color: "var(--p1)" }}>✓</div>Auto-archives any job older than 14 days</div>
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p1-lt)", color: "var(--p1)" }}>✓</div>Real-time verification kills closed roles in minutes</div>
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p1-lt)", color: "var(--p1)" }}>✓</div>Aggregates Greenhouse, Lever, Workable + more</div>
              </div>
              <a href="https://www.hotlist-jobs.com/" target="_blank" rel="noopener noreferrer" className="pc-link is-live" style={{ background: "var(--p1)" }}>
                Browse live jobs
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </a>
            </div>
            <div className="pc-visual hotlist">
              <div className="hot-ui">
                <div className="hot-hd">
                  <div className="hot-hd-l">
                    <span className="hot-live-dot" />
                    Hotlist Jobs · Live feed
                  </div>
                  <span className="hot-hd-r">Updated 2m ago</span>
                </div>
                <div className="hot-body">
                  <div className="hot-job">
                    <div className="hot-logo" style={{ background: "linear-gradient(135deg,#2563eb,#6366f1)" }}>S</div>
                    <div className="hot-info">
                      <div className="hot-role">Senior Frontend Engineer</div>
                      <div className="hot-co">Stripe · Remote</div>
                    </div>
                    <span className="hot-badge new">NEW</span>
                  </div>
                  <div className="hot-job">
                    <div className="hot-logo" style={{ background: "linear-gradient(135deg,#0891b2,#0e7490)" }}>L</div>
                    <div className="hot-info">
                      <div className="hot-role">Staff Product Designer</div>
                      <div className="hot-co">Linear · SF / Remote</div>
                    </div>
                    <span className="hot-badge">1d</span>
                  </div>
                  <div className="hot-job">
                    <div className="hot-logo" style={{ background: "linear-gradient(135deg,#7c3aed,#a855f7)" }}>V</div>
                    <div className="hot-info">
                      <div className="hot-role">Backend Engineer, Infra</div>
                      <div className="hot-co">Vercel · Remote</div>
                    </div>
                    <span className="hot-badge">3d</span>
                  </div>
                </div>
                <div className="hot-foot">
                  <span>1,247 live roles</span>
                  <span className="hot-foot-k">14-day freshness ✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* VELA */}
          <div className="product-card">
            <div className="pc-visual vela blurred">
              <div className="pc-coming-soon"><span className="pc-coming-soon-pill">Coming soon</span></div>
              <div className="vela-ui">
                <div className="vela-hd">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2" /><path d="M5 3V5.5L6.5 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
                  Kerb · Bin schedule
                </div>
                <div className="vela-body">
                  <div className="vela-source">
                    <div className="vela-src-dot" />
                    <div className="vela-src-text">
                      <div className="vela-src-title">Nature: AI model outperforms specialists in diagnosis</div>
                      <div className="vela-src-url">nature.com/articles/s41586-025...</div>
                    </div>
                  </div>
                  <div className="vela-source">
                    <div className="vela-src-dot" />
                    <div className="vela-src-text">
                      <div className="vela-src-title">MIT: New benchmarks for multimodal reasoning</div>
                      <div className="vela-src-url">arxiv.org/abs/2503.18821</div>
                    </div>
                  </div>
                  <div className="vela-source">
                    <div className="vela-src-dot" style={{ background: "var(--muted)" }} />
                    <div className="vela-src-text">
                      <div className="vela-src-title">Wired: What AI can&apos;t replace yet</div>
                      <div className="vela-src-url">wired.com/story/what-ai-cant...</div>
                    </div>
                  </div>
                  <div className="vela-confidence">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>
                    High confidence · 12 sources cross-checked
                  </div>
                </div>
              </div>
            </div>
            <div className="pc-info">
              <div className="pc-top">
                <div className="pc-badge" style={{ background: "var(--p3-lt)", color: "var(--p3)", border: "1px solid rgba(124,58,237,.2)" }}>
                  <span className="pc-badge-dot" style={{ background: "var(--p3)" }} />
                  UK Home
                </div>
                <div className="pc-name" style={{ color: "var(--p3)" }}>Kerb</div>
                <div className="pc-tagline" style={{ color: "var(--sub)" }}>Never miss bin day again.</div>
                <p className="pc-desc">Enter your UK postcode once. Kerb pings you the night before every collection: recycling, general, garden waste, whatever your council runs. No app to check, no calendar to maintain, no forgotten wheelie bins at 7am.</p>
              </div>
              <div className="pc-features">
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p3-lt)", color: "var(--p3)" }}>✓</div>Works with every UK council schedule</div>
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p3-lt)", color: "var(--p3)" }}>✓</div>Auto-adjusts for bank holiday shifts</div>
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p3-lt)", color: "var(--p3)" }}>✓</div>Push, email, or Alexa reminders</div>
              </div>
              <a href="#" className="pc-link is-notify" style={{ background: "var(--p3)" }}>
                Notify me at launch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 9V6a4 4 0 0 1 8 0v3l1 1.5H2L3 9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M5.5 11a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </a>
            </div>
          </div>

          {/* STASHBOX */}
          <div className="product-card">
            <div className="pc-info">
              <div className="pc-top">
                <div className="pc-badge" style={{ background: "var(--p2-lt)", color: "var(--p2)", border: "1px solid rgba(22,163,74,.2)" }}>
                  <span className="pc-badge-dot" style={{ background: "var(--p2)" }} />
                  Savings
                </div>
                <div className="pc-name" style={{ color: "var(--p2)" }}>Stashbox</div>
                <div className="pc-tagline" style={{ color: "var(--sub)" }}>Save smartly.</div>
                <p className="pc-desc">Set a goal. Name it. Watch it fill up. Stashbox turns &ldquo;I should save for this&rdquo; into &ldquo;I already am.&rdquo; Multiple moneyboxes in one app, automatic round-ups from every card swipe, and zero pressure to invest anything anywhere.</p>
              </div>
              <div className="pc-features">
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p2-lt)", color: "var(--p2)" }}>✓</div>Multiple goals, one simple balance</div>
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p2-lt)", color: "var(--p2)" }}>✓</div>Round-ups from any bank card</div>
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p2-lt)", color: "var(--p2)" }}>✓</div>No fees, no investment risk, no lectures</div>
              </div>
              <a href="#" className="pc-link is-notify" style={{ background: "var(--p2)" }}>
                Notify me at launch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 9V6a4 4 0 0 1 8 0v3l1 1.5H2L3 9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M5.5 11a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </a>
            </div>
            <div className="pc-visual stashbox">
              <div className="stash-phones">
                <div className="stash-phone left">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mocks/Home.png" alt="Stashbox home" />
                </div>
                <div className="stash-phone center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mocks/Moneybox.png" alt="Stashbox moneybox detail" />
                </div>
                <div className="stash-phone right">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/mocks/Profile.png" alt="Stashbox profile" />
                </div>
              </div>
            </div>
          </div>

          {/* MIRA */}
          <div className="product-card">
            <div className="pc-visual mira blurred">
              <div className="pc-coming-soon"><span className="pc-coming-soon-pill">Coming soon</span></div>
              <div className="mira-ui">
                <div className="mira-hd">
                  Lumen · Course search
                  <span className="mira-range">Week 12</span>
                </div>
                <div className="mira-body">
                  <div className="mira-kpis">
                    <div className="mira-kpi">
                      <div className="mira-kpi-n">2.4k</div>
                      <div className="mira-kpi-l">Visitors</div>
                      <span className="mira-kpi-delta delta-up">↑ 12%</span>
                    </div>
                    <div className="mira-kpi">
                      <div className="mira-kpi-n">68%</div>
                      <div className="mira-kpi-l">Retention</div>
                      <span className="mira-kpi-delta delta-up">↑ 4%</span>
                    </div>
                    <div className="mira-kpi">
                      <div className="mira-kpi-n">$8.2k</div>
                      <div className="mira-kpi-l">Revenue</div>
                      <span className="mira-kpi-delta delta-up">↑ 9%</span>
                    </div>
                    <div className="mira-kpi">
                      <div className="mira-kpi-n">1.8%</div>
                      <div className="mira-kpi-l">Churn</div>
                      <span className="mira-kpi-delta delta-dn">↑ 0.2%</span>
                    </div>
                  </div>
                  <div className="mira-chart">
                    <div className="mc-bar" style={{ height: "40%" }} />
                    <div className="mc-bar" style={{ height: "55%" }} />
                    <div className="mc-bar" style={{ height: "45%" }} />
                    <div className="mc-bar" style={{ height: "70%" }} />
                    <div className="mc-bar" style={{ height: "60%" }} />
                    <div className="mc-bar" style={{ height: "80%" }} />
                    <div className="mc-bar hi" style={{ height: "100%" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="pc-info">
              <div className="pc-top">
                <div className="pc-badge" style={{ background: "var(--p4-lt)", color: "var(--p4)", border: "1px solid rgba(8,145,178,.2)" }}>
                  <span className="pc-badge-dot" style={{ background: "var(--p4)" }} />
                  Learning
                </div>
                <div className="pc-name" style={{ color: "var(--p4)" }}>Lumen</div>
                <div className="pc-tagline" style={{ color: "var(--sub)" }}>Every course, in one place.</div>
                <p className="pc-desc">Udemy, Coursera, edX, YouTube, MOOCs, indie creators, all searchable in one place. Lumen finds every course on any topic, ranks them by what real learners actually finished, and tells you exactly what each one costs.</p>
              </div>
              <div className="pc-features">
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p4-lt)", color: "var(--p4)" }}>✓</div>Searches 20+ course platforms at once</div>
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p4-lt)", color: "var(--p4)" }}>✓</div>Real completion rates, not star ratings</div>
                <div className="pcf"><div className="pcf-icon" style={{ background: "var(--p4-lt)", color: "var(--p4)" }}>✓</div>Side-by-side price, length, and level compare</div>
              </div>
              <a href="#" className="pc-link is-notify" style={{ background: "var(--p4)" }}>
                Notify me at launch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 9V6a4 4 0 0 1 8 0v3l1 1.5H2L3 9z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /><path d="M5.5 11a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="mission" id="mission">
        <div className="mission-mesh" />
        <div className="mission-inner">
          <div className="mission-left">
            <div className="sec-label">Our mission</div>
            <h2 className="sec-title" style={{ color: "#fff", marginBottom: 20 }}>
              AI should work<br /><em style={{ color: "rgba(255,255,255,.55)" }}>for everyone</em>
            </h2>
            <p className="sec-desc">
              Most AI tools reward people who already know how to use them. Optruvian builds differently. Every product is designed so that the first time you try it, it feels obvious. Not impressive. Obvious.
            </p>
            <p className="sec-desc" style={{ marginTop: 16 }}>
              We ship one product at a time, make it solid, and move on to the next problem worth solving.
            </p>
          </div>
          <div className="mission-right">
            <div className="mission-values">
              <div className="mv">
                <span className="mv-num">01</span>
                <div>
                  <div className="mv-h">Usefulness over novelty</div>
                  <p className="mv-p">We don&apos;t build things because AI can do them. We build things because people need them done. The technology is a means, not the point.</p>
                </div>
              </div>
              <div className="mv">
                <span className="mv-num">02</span>
                <div>
                  <div className="mv-h">Simple by default</div>
                  <p className="mv-p">Every feature that makes a product harder to use is a failure. Complexity is easy. Simplicity takes real work, and we do that work.</p>
                </div>
              </div>
              <div className="mv">
                <span className="mv-num">03</span>
                <div>
                  <div className="mv-h">Ship things that hold up</div>
                  <p className="mv-p">We&apos;d rather release one solid product than three half-finished ones. When something leaves our hands, it has to be worth the space it takes in someone&apos;s workflow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <div className="process-inner">
          <div className="process-hdr">
            <div className="sec-label">How we build</div>
            <h2 className="sec-title">The same process,<br /><em>every time</em></h2>
            <p className="sec-desc" style={{ marginTop: 12 }}>Every Optruvian product goes through the same four stages. No shortcuts.</p>
          </div>
          <div className="proc-grid">
            <div className="proc-step">
              <div className="ps-n">01</div>
              <div className="ps-h">Find a real problem</div>
              <p className="ps-p">We start by talking to people, not reading trend reports. A problem worth solving shows up as time wasted: something people do every week that they wish they didn&apos;t have to.</p>
            </div>
            <div className="proc-step">
              <div className="ps-n">02</div>
              <div className="ps-h">Build the simplest version</div>
              <p className="ps-p">The first version does one thing well. No onboarding. No settings menu. If you can&apos;t figure it out in 60 seconds, we start over.</p>
            </div>
            <div className="proc-step">
              <div className="ps-n">03</div>
              <div className="ps-h">Test with real users</div>
              <p className="ps-p">Beta users aren&apos;t a marketing strategy. They&apos;re the last line of feedback before launch. We watch how people actually use the product, not how we expect them to.</p>
            </div>
            <div className="proc-step">
              <div className="ps-n">04</div>
              <div className="ps-h">Ship and improve</div>
              <p className="ps-p">We release when something is genuinely useful, not when it&apos;s perfect. Then we fix what breaks and add what&apos;s missing, based on what users do, not what they ask for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-mesh" />
        <div className="cta-inner">
          <div className="sec-label" style={{ marginBottom: 12 }}>Get started</div>
          <h2>Pick a product.<br /><em>Try it free.</em></h2>
          <p>Everything we make has a free tier. No credit card, no onboarding call, no commitment. If it doesn&apos;t fit, walk away. No hard feelings.</p>
          <div className="cta-row">
            <input type="email" className="cta-input" placeholder="your@email.com" />
            <a href="#" className="btn-primary">
              Get early access
              <ArrowRight />
            </a>
          </div>
          <p className="cta-note">We&apos;ll send you a link to all four products. Free to start, forever.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
