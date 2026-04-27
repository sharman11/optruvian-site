import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers · Optruvian",
  description:
    "We're a small team shipping AI products for everyday people. Right now we're open to interns.",
};

export default function Careers() {
  return (
    <>
      <Navbar />

      <section className="careers-hero">
        <div className="careers-inner">
          <div className="sec-label">Careers</div>
          <h1 className="careers-title">
            Come build<br /><em>with us.</em>
          </h1>
          <p className="careers-lead">
            We&apos;re a small team making AI products for people who don&apos;t want to learn another tool. If you want to work on things that actually ship, there&apos;s probably room for you here.
          </p>
        </div>
      </section>

      <section className="careers-card-wrap">
        <div className="careers-card">
          <div className="cc-glow" />
          <div className="cc-top">
            <div className="cc-status">
              <span className="cc-status-dot" />
              Open position
            </div>
            <div className="cc-badge">Internship</div>
          </div>
          <h2 className="cc-title">Intern</h2>
          <p className="cc-sub">Optruvian Tech · Fully remote</p>

          <div className="cc-facts">
            <div className="cc-fact">
              <div className="cc-fact-l">Duration</div>
              <div className="cc-fact-v">1 month</div>
            </div>
            <div className="cc-fact">
              <div className="cc-fact-l">Location</div>
              <div className="cc-fact-v">Remote</div>
            </div>
            <div className="cc-fact">
              <div className="cc-fact-l">Experience</div>
              <div className="cc-fact-v">Any level</div>
            </div>
            <div className="cc-fact">
              <div className="cc-fact-l">Applications</div>
              <div className="cc-fact-v">Rolling</div>
            </div>
          </div>

          <div className="cc-foot">
            <div className="cc-foot-label">Send your resume to</div>
            <a href="mailto:careers@optruvian.tech" className="cc-email">
              careers@optruvian.tech
            </a>
            <div className="cc-foot-note">We reply within 24 hours. No ghosting.</div>
          </div>
        </div>
      </section>

      <section className="careers-content">
        <div className="careers-content-inner">

          <div className="careers-block">
            <div className="careers-block-n">01</div>
            <h2 className="careers-block-h">What this actually is</h2>
            <p className="careers-block-p">
              One month, fully remote. You pick up something real in week one and own it until you leave. We don&apos;t park interns on busy work or ticket triage. If the project ships, your name is on it.
            </p>
            <p className="careers-block-p">
              You&apos;ll see how a product goes from a half-written note in a doc to something live on the internet. Not a lot of companies will let an intern near that. We will.
            </p>
          </div>

          <div className="careers-block">
            <div className="careers-block-n">02</div>
            <h2 className="careers-block-h">Who we think will fit</h2>
            <p className="careers-block-p">
              You care about the craft more than the title on your LinkedIn. You can make a decision without being asked twice. You&apos;d rather write a clear sentence than a long one. You&apos;ve finished something, anything: a side project, a weekend script, a student thing, a badly-written first version of a blog. We just want to see you finish things.
            </p>
            <p className="careers-block-p">
              No degree required. No prior internships required. No track record required. Just show us you&apos;re someone who moves.
            </p>
          </div>

          <div className="careers-block">
            <div className="careers-block-n">03</div>
            <h2 className="careers-block-h">How to apply</h2>
            <p className="careers-block-p">
              Send your resume and a short note to <a href="mailto:careers@optruvian.tech">careers@optruvian.tech</a>. Tell us what you want to learn this month and point us at one thing you&apos;ve made. If you&apos;ve never made anything, tell us what you&apos;ve been reading lately and why it stuck with you.
            </p>
            <p className="careers-block-p">
              We read every email. If it looks like a fit we&apos;ll reply within 24 hours and set up a 20 minute call. If it doesn&apos;t, you&apos;ll still hear back. We don&apos;t ghost.
            </p>
            <a href="mailto:careers@optruvian.tech" className="btn-primary careers-cta">
              Email us
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5H11M11 6.5L7.5 3M11 6.5L7.5 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" /></svg>
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
