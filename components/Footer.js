import Link from "next/link";
import { business } from "../data/business";

export default function Footer() {
  return <footer className="site-footer"><div className="container footer-top"><div><Link href="/" className="footer-brand"><span className="brand-mark" aria-hidden="true" />{business.name}</Link><p>Independent graphic design studio<br />{business.locationShort}</p></div><div className="footer-links"><div><span>Explore</span><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div><div><span>Services</span><Link href="/services/logo-design">Logo & identity</Link><Link href="/services/graphic-design">Graphic design</Link><Link href="/services/publication-design">Publication design</Link></div></div></div><div className="container footer-bottom"><span>© 2026 {business.name}</span><span>Sadashiv Peth · Pune 411030</span></div></footer>;
}
