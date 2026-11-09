import CTA from "../../components/CTA";
import { business } from "../../data/business";

export const metadata = { title: "About", description: "About Matchstick Design Studio in Sadashiv Peth, Pune." };

export default function AboutPage() {
  return <>
    <main id="main-content">
      <section className="page-hero"><div className="container page-hero-grid"><p className="kicker">About Matchstick</p><div><h1>A design studio with room for conversation.</h1><p className="lead">The final story will be built from the owner&apos;s actual background, point of view and body of work.</p></div></div></section>
      <section className="section"><div className="container about-feature"><div className="about-image"><img src="/placeholders/project-06.svg" alt="Placeholder studio or founder portrait artwork" /></div><div className="about-copy"><p className="kicker">The story</p><h2>[Founder story placeholder]</h2><p>Use this space for the real origin story, philosophy and working style after an owner interview.</p><p className="note">Do not publish founder, founding year or team claims until verified.</p></div></div></section>
      <section className="about-principle"><div className="container"><p className="kicker">Working principle</p><p className="big-statement">Good design should make the idea clearer, not make the designer louder.</p></div></section>
      <section className="section"><div className="container"><p className="kicker">Studio facts</p><div className="fact-grid"><div><span>Founded</span><strong>[TBD]</strong></div><div><span>Location</span><strong>{business.locationShort}</strong></div><div><span>Founder</span><strong>[TBD]</strong></div><div><span>Years active</span><strong>[TBD]</strong></div></div></div></section>
    </main>
    <CTA />
  </>;
}
