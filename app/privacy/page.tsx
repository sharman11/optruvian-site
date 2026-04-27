import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy · Optruvian",
  description:
    "How Optruvian collects, uses, and protects your personal information. Plain English, no tricks.",
};

export default function Privacy() {
  return (
    <>
      <Navbar />

      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="sec-label">Legal</div>
          <h1 className="legal-title">Privacy <em>Policy</em></h1>
          <div className="legal-meta">Last updated · 13 April 2026</div>
        </div>
      </section>

      <article className="legal-content">

            <section className="legal-section">
              <div className="legal-n">01</div>
              <h2>Who we are</h2>
              <p>
                Optruvian Tech Inc. builds AI products for everyday work. This policy explains what we do with your information when you visit our website or use one of our products.
              </p>
              <p>
                If you have questions about anything on this page, email us at <a href="mailto:privacy@optruvian.tech">privacy@optruvian.tech</a>.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">02</div>
              <h2>What we collect</h2>
              <p>
                We try to collect as little as possible. Here is what we do collect.
              </p>
              <h3>Information you give us</h3>
              <ul>
                <li>Your email address, if you sign up for early access, apply for a job, or contact us.</li>
                <li>Any content you send us in emails, forms, or applications, such as your CV or the text of a message.</li>
              </ul>
              <h3>Information we get automatically</h3>
              <ul>
                <li>Basic analytics when you visit our site: pages viewed, referrer, rough location at country or city level, device type.</li>
                <li>Cookies that are strictly necessary for the site to function, plus optional analytics cookies that you can decline.</li>
              </ul>
              <p>
                We do not collect payment information on this site. We do not build shadow profiles of visitors who have not signed up. We do not run advertising or tracking pixels from third parties.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">03</div>
              <h2>Why we collect it</h2>
              <p>We collect information for three reasons.</p>
              <ul>
                <li><strong>To run the site and products.</strong> Basic technical data so pages load, forms work, and things do not break.</li>
                <li><strong>To talk to you.</strong> If you give us your email, we use it to reply to you or to send you the specific thing you asked for, such as an early access invite, an application response, or a newsletter if you explicitly opted in.</li>
                <li><strong>To improve what we make.</strong> Aggregate analytics help us understand which products people care about.</li>
              </ul>
              <p>
                Under UK GDPR, our lawful basis for this is either your consent (when you explicitly sign up or opt in) or our legitimate interest in running a website (for basic analytics and security).
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">04</div>
              <h2>Who we share it with</h2>
              <p>Almost no one. Specifically:</p>
              <ul>
                <li><strong>Service providers</strong> who help us run the site, such as hosting, email delivery, and analytics. They are bound by data processing agreements and cannot use your data for their own purposes.</li>
                <li><strong>Authorities</strong>, if we are legally required to disclose information. We will push back on overbroad requests.</li>
              </ul>
              <p>
                We do not sell your data. We do not share it with advertisers. We do not rent, trade, or monetize your information in any form.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">05</div>
              <h2>How long we keep it</h2>
              <ul>
                <li>Emails you send us: kept as long as we need to handle your request, usually less than 12 months.</li>
                <li>Job applications: kept for 6 months after the process ends, then deleted unless you ask us to keep your CV on file longer.</li>
                <li>Analytics data: aggregated and anonymised, kept for 24 months at most.</li>
                <li>Newsletter subscriptions: kept until you unsubscribe.</li>
              </ul>
            </section>

            <section className="legal-section">
              <div className="legal-n">06</div>
              <h2>Your rights</h2>
              <p>Under UK GDPR and similar laws, you have the right to:</p>
              <ul>
                <li>Ask us what data we have on you.</li>
                <li>Ask us to correct anything that is wrong.</li>
                <li>Ask us to delete your data.</li>
                <li>Ask for a copy of your data in a portable format.</li>
                <li>Object to us processing your data.</li>
                <li>Withdraw consent at any time.</li>
              </ul>
              <p>
                To exercise any of these rights, email <a href="mailto:privacy@optruvian.tech">privacy@optruvian.tech</a>. We will respond within 30 days.
              </p>
              <p>
                If you are not happy with our response, you can complain to the UK Information Commissioner&apos;s Office at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">07</div>
              <h2>Cookies</h2>
              <p>Our site uses a small number of cookies.</p>
              <ul>
                <li><strong>Essential cookies</strong> are required for the site to work at all. You cannot turn these off.</li>
                <li><strong>Analytics cookies</strong> are optional. They help us measure how people use the site. You can decline them on your first visit.</li>
              </ul>
              <p>
                We do not use advertising cookies or third-party tracking pixels.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">08</div>
              <h2>International transfers</h2>
              <p>
                Some of our service providers are located outside the UK and EU. When we transfer data to them, we use Standard Contractual Clauses or equivalent safeguards to protect it.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">09</div>
              <h2>Changes to this policy</h2>
              <p>
                If we make material changes, we will update the &ldquo;last updated&rdquo; date at the top of this page and, if the change is significant, notify people who have given us their email. The latest version always lives at this URL.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">10</div>
              <h2>Contact</h2>
              <p>
                Questions, requests, or complaints: <a href="mailto:privacy@optruvian.tech">privacy@optruvian.tech</a>
              </p>
              <p>
                Optruvian Tech Inc.<br />
                United Kingdom
              </p>
            </section>

      </article>

      <Footer />
    </>
  );
}
