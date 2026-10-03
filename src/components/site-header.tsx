import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="relative z-30 border-b border-border/70 bg-background/85 backdrop-blur-xl">
    <div className="page-wrap flex h-18 items-center justify-between gap-5">
      <Link to="/" className="flex items-center gap-2.5 text-lg font-semibold tracking-normal" onClick={() => setOpen(false)} aria-label="InvestorSafe AI home"><span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground"><ShieldCheck className="size-5" strokeWidth={2.2}/></span><span>InvestorSafe <span className="text-primary">AI</span></span></Link>
      <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex" aria-label="Main navigation"><Link to="/" activeProps={{ className: "text-foreground" }} className="hover:text-foreground">Home</Link><Link to="/how-it-works" activeProps={{ className: "text-foreground" }} className="hover:text-foreground">How It Works</Link><Link to="/safety" activeProps={{ className: "text-foreground" }} className="hover:text-foreground">Safety</Link></nav>
      <Button asChild size="lg" className="hidden md:inline-flex"><Link to="/check">Check a Message <ArrowUpRight/></Link></Button>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
    </div>
    {open && <nav className="page-wrap flex flex-col gap-1 border-t border-border py-4 md:hidden" aria-label="Mobile navigation">{([ ["/", "Home"], ["/how-it-works", "How It Works"], ["/safety", "Safety"], ["/check", "Check a Message"] ] as const).map(([to, label]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm hover:bg-secondary">{label}</Link>)}</nav>}
  </header>;
}
