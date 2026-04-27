import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Stashbox Account",
  description:
    "Request deletion of your Stashbox account and the personal data associated with the Stashbox app.",
  robots: { index: false, follow: false },
};

export default function DeleteAccount() {
  return (
    <>
      <section className="legal-hero">
        <div className="legal-hero-inner">
          <div className="sec-label">Stashbox</div>
          <h1 className="legal-title">Delete Your <em>Account</em></h1>
          <div className="legal-meta">Account deletion request</div>
        </div>
      </section>

      <article className="legal-content">

        <section className="legal-section">
          <p>
            If you wish to delete your account and the personal data associated with the Stashbox app, please follow the instructions below. We aim to make this process as transparent and straightforward as possible.
          </p>
        </section>

        <section className="legal-section">
          <div className="legal-n">01</div>
          <h2>How to request deletion</h2>
          <p>You can initiate an account deletion request through any of the following methods:</p>
          <ul>
            <li><strong>In-App (recommended).</strong> Open the Stashbox app, navigate to <strong>Profile Settings &gt; Account &gt; Delete Account</strong>. This is the most secure method as it verifies your identity automatically.</li>
            <li><strong>Email support.</strong> Send an email from your registered email address to <a href="mailto:sharmancm11@gmail.com">sharmancm11@gmail.com</a> with the subject line: <strong>&ldquo;Account Deletion Request.&rdquo;</strong></li>
          </ul>
        </section>

        <section className="legal-section">
          <div className="legal-n">02</div>
          <h2>Data that will be deleted</h2>
          <p>Once your request is processed, the following data will be permanently purged from our active systems:</p>
          <ul>
            <li><strong>User identity.</strong> Your legal name, registered email address, and login credentials.</li>
            <li><strong>Financial profiles.</strong> Any linked accounts, budget settings, or manual transaction entries.</li>
            <li><strong>App activity.</strong> Your interaction history, preferences, and saved configurations.</li>
            <li><strong>Profile info.</strong> Any uploaded avatars or personalization data.</li>
          </ul>
        </section>

        <section className="legal-section">
          <div className="legal-n">03</div>
          <h2>Data retention &amp; legal compliance</h2>
          <p>To comply with global financial regulations and security standards, please note the following:</p>
          <ul>
            <li><strong>Regulatory records.</strong> Certain transaction logs or tax-related data may be retained for up to 5 years (or as required by local law) to satisfy anti-money laundering (AML) and financial reporting requirements.</li>
            <li><strong>Security logs.</strong> Minimal technical logs may be kept for a short period to prevent fraud and ensure system integrity.</li>
            <li><strong>Anonymized data.</strong> We may retain aggregated, non-identifiable data for internal analytics to improve the app.</li>
          </ul>
        </section>

        <section className="legal-section">
          <div className="legal-n">04</div>
          <h2>Contact</h2>
          <p>
            Questions about account deletion: <a href="mailto:sharmancm11@gmail.com">sharmancm11@gmail.com</a>
          </p>
        </section>

      </article>
    </>
  );
}
