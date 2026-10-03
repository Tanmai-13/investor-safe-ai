import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Fingerprint, ScanSearch, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafetyNote } from "@/components/flow";
import hero from "@/assets/investorsafe-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "InvestorSafe AI — Check Before You Invest" }, { name: "description", content: "Understand suspicious investment messages, spot potential warning signs, and verify details before taking action." }, { property: "og:title", content: "InvestorSafe AI — Check Before You Invest" }, { property: "og:description", content: "An investor-safety assistant for checking suspicious messages and finding safer next steps." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Home,
});

const features = [
  { icon: ScanSearch, n: "01", title: "AI Scam Analysis", text: "Identify possible warning signs in investment messages." },
  { icon: Fingerprint, n: "02", title: "Smart Detail Detection", text: "Find URLs, phone numbers, UPI IDs and platform names." },
  { icon: ShieldCheck, n: "03", title: "Verification Guidance", text: "Know what to verify and where to verify it." },
];
function Home() {
  return <>
    <main>
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, var(--background) 0%, color-mix(in oklch, var(--background) 96%, transparent) 27%, color-mix(in oklch, var(--background) 50%, transparent) 59%, transparent 100%), url(${hero})` }}>
        <div className="page-wrap hero-inner"><div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-line"/> INVESTOR SAFETY, MADE SIMPLE</span>
          <h1>Check Before<br/>You <em>Invest.</em></h1>
          <p>Understand suspicious investment messages, identify warning signs, and verify important details before taking action.</p>
          <div className="hero-actions"><Button asChild size="lg"><Link to="/check">Check a Message <ArrowRight/></Link></Button><Button asChild variant="outline" size="lg"><Link to="/how-it-works">How It Works <ArrowUpRight/></Link></Button></div>
          <div className="hero-trust"><span className="trust-icon"><Check className="size-4"/></span><span>No account needed <span className="trust-divider">/</span> Private by design <span className="trust-divider">/</span> Free to explore</span></div>
        </div></div>
      </section>
      <section className="feature-section"><div className="page-wrap"><div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line"/> A SAFER FIRST STEP</span><h2>Clarity before commitment.</h2></div><p>From a concerning message to a clearer next step, without the noise.</p></div><div className="feature-grid">{features.map(({ icon: Icon, n, title, text }) => <article key={n} className="feature-card"><div className="feature-top"><span className="feature-icon"><Icon className="size-6" strokeWidth={1.8}/></span><span className="feature-number">{n} / 03</span></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="page-wrap home-note"><SafetyNote>InvestorSafe AI provides safety awareness and verification guidance. It does not provide investment advice.</SafetyNote></section>
    </main>
  </>;
}
