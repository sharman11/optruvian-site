import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service · Optruvian",
  description:
    "The rules for using Optruvian and our products. Plain English, no tricks.",
};

export default function Terms() {
  return (
    <>
      <Navbar />

      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="sec-label">Legal</div>
          <h1 className="legal-title">Terms of <em>Service</em></h1>
          <div className="legal-meta">Last updated · 13 April 2026</div>
        </div>
      </section>

      <article className="legal-content">

            <section className="legal-section">
              <div className="legal-n">01</div>
              <h2>What this is</h2>
              <p>
                These terms describe what you can expect from us and what we expect from you when you use the Optruvian website and the products we build. If you use Optruvian, you agree to these terms.
              </p>
              <p>
                If you do not agree, please do not use the products. That is okay. No hard feelings.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">02</div>
              <h2>Who we are</h2>
              <p>
                Optruvian Tech Inc., registered in the United Kingdom. You can reach us at <a href="mailto:hello@optruvian.tech">hello@optruvian.tech</a>.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">03</div>
              <h2>Who can use our products</h2>
              <p>
                You can use Optruvian if you are 16 or older and capable of entering into a legal agreement. If you are using Optruvian on behalf of a company, you confirm that you have the authority to do so on the company&apos;s behalf.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">04</div>
              <h2>Your account</h2>
              <p>
                Some products require an account. If so, you are responsible for:
              </p>
              <ul>
                <li>Giving us accurate information when you sign up.</li>
                <li>Keeping your login credentials safe.</li>
                <li>Anything that happens on your account while you are logged in.</li>
              </ul>
              <p>
                If you think someone has accessed your account without your permission, email us immediately at <a href="mailto:security@optruvian.tech">security@optruvian.tech</a>.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">05</div>
              <h2>How you can use our products</h2>
              <p>
                You can use Optruvian products for personal and commercial purposes, subject to the rules below.
              </p>
              <h3>Do not</h3>
              <ul>
                <li>Break the law with our products.</li>
                <li>Try to hack, reverse engineer, or scrape the service in ways we have not explicitly allowed.</li>
                <li>Use our products to harass people, spread malware, or send spam.</li>
                <li>Pretend to be someone you are not.</li>
                <li>Resell our products as your own or pass off our work as yours.</li>
              </ul>
              <h3>Please do</h3>
              <ul>
                <li>Tell us if you find a bug or security issue.</li>
                <li>Be decent to other users and to us.</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that break these rules. In most cases we will try to warn you first. In serious cases we may not.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">06</div>
              <h2>What you own and what we own</h2>
              <p>
                <strong>You own your stuff.</strong> Anything you create, upload, or share through Optruvian remains yours. We do not claim ownership of your content.
              </p>
              <p>
                By using our products, you grant us a limited licence to store, process, and display your content only to the extent needed to operate the product you are using. Nothing beyond that.
              </p>
              <p>
                <strong>We own our stuff.</strong> The Optruvian brand, logo, product names (Hotlist Jobs, Kerb, Nook, Lumen), website copy, underlying code, and anything else we create remain our property. You cannot copy, clone, or pass them off as your own.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">07</div>
              <h2>Free tiers and pricing</h2>
              <p>
                Most of our products will have a free tier. Where there is a paid tier, we will always show the price clearly before you pay. Prices, features, and limits may change, and we will give you reasonable notice before any change that affects you.
              </p>
              <p>
                We do not auto-renew paid subscriptions without asking. You will always get a heads up.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">08</div>
              <h2>Changes to the products</h2>
              <p>
                We are a small team. We ship, we break things, we fix them, and we iterate. That means:
              </p>
              <ul>
                <li>Products will change over time.</li>
                <li>Features may be added, improved, or removed.</li>
                <li>Sometimes a product will go down for maintenance.</li>
                <li>Occasionally a whole product may be retired. If that happens, we will give you at least 60 days notice and help you export your data if there is any.</li>
              </ul>
            </section>

            <section className="legal-section">
              <div className="legal-n">09</div>
              <h2>What we promise and what we do not</h2>
              <p>
                We make a genuine effort to keep our products useful, reliable, and secure. But we cannot guarantee perfection.
              </p>
              <p>
                Optruvian is provided &ldquo;as is&rdquo;. To the fullest extent allowed by law, we do not make warranties about uninterrupted or error-free operation, fitness for a specific purpose you have in mind, or the accuracy and completeness of results generated by our AI.
              </p>
              <p>
                If an outage, bug, or unexpected behaviour causes you loss, please tell us and we will do our best to make it right. But our legal liability is limited to what you have paid us in the previous 12 months, or 100 GBP, whichever is greater.
              </p>
              <p>
                Nothing in these terms limits our liability for death, personal injury caused by our negligence, fraud, or anything else that cannot be limited under UK law.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">10</div>
              <h2>Ending the service</h2>
              <p>
                You can stop using Optruvian at any time. If you have an account, you can delete it whenever you like. We will delete your data promptly, except for anything we are legally required to retain.
              </p>
              <p>
                We can end your access to our products if you seriously break these terms. We will tell you why when we do.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">11</div>
              <h2>Governing law</h2>
              <p>
                These terms are governed by the laws of England and Wales. Any dispute will be settled in the courts of England and Wales, unless the law where you live gives you the right to bring a claim locally.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">12</div>
              <h2>Changes to these terms</h2>
              <p>
                We may update these terms from time to time. If we make material changes, we will let you know by email (if we have it) or by a notice on the website at least 30 days before the change takes effect. If you keep using Optruvian after the change, that counts as accepting the new terms.
              </p>
            </section>

            <section className="legal-section">
              <div className="legal-n">13</div>
              <h2>Contact</h2>
              <p>
                General questions: <a href="mailto:hello@optruvian.tech">hello@optruvian.tech</a><br />
                Security issues: <a href="mailto:security@optruvian.tech">security@optruvian.tech</a><br />
                Legal: <a href="mailto:legal@optruvian.tech">legal@optruvian.tech</a>
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
