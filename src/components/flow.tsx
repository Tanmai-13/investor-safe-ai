import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = ["Message", "Analysis", "Results", "Verify", "Safety"];
export function FlowSteps({ current }: { current: number }) {
  return <div className="flow-steps" aria-label="Check progress">{steps.map((step, i) => <div key={step} className={`flow-step ${i === current ? "is-current" : ""} ${i < current ? "is-done" : ""}`}><span className="flow-dot">{i < current ? "✓" : String(i + 1).padStart(2, "0")}</span><span>{step}</span></div>)}</div>;
}
export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="page-intro"><span className="eyebrow"><span className="eyebrow-line"/> {eyebrow}</span><h1>{title}</h1><p>{description}</p></div>;
}
export function FlowFooter({ next, nextLabel, back, backLabel }: { next?: "/check" | "/results" | "/verify" | "/safety"; nextLabel?: string; back?: "/" | "/check" | "/results" | "/verify"; backLabel?: string }) {
  return <div className="mt-10 flex flex-wrap items-center gap-4">{next && <Button asChild size="lg"><Link to={next}>{nextLabel}<ArrowRight/></Link></Button>}{back && <Button asChild size="lg" variant="outline"><Link to={back}><ArrowLeft/>{backLabel}</Link></Button>}</div>;
}
export function SafetyNote({ children }: { children: React.ReactNode }) { return <div className="safety-note"><ShieldCheck className="size-4 shrink-0 text-primary"/><span>{children}</span></div>; }
