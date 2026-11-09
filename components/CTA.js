import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container cta-shell">
        <p className="kicker">Have a project in mind?</p>
        <div className="cta-copy">
          <h2 id="cta-title">Bring the idea.<br />We&apos;ll shape the visual.</h2>
          <Link href="/contact" className="button button-light">Start a project <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
