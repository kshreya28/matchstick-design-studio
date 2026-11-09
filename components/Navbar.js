import Link from "next/link";
import { business } from "../data/business";

export default function Navbar() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="container nav-shell">
        <Link href="/" className="brand" aria-label={`${business.name} home`}>
          <span className="brand-mark" aria-hidden="true" />
          <span>{business.shortName}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/work">Work</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link href="/contact" className="button button-small nav-cta">Start a project</Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <Link href="/work">Work</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact" className="mobile-menu-cta">Start a project →</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
