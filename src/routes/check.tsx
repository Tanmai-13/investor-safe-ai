import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ArrowRight, FileImage, LockKeyhole, RotateCcw, Sparkles, UploadCloud, X } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FlowSteps, PageIntro, SafetyNote } from "@/components/flow";
import { DEMO_MESSAGE, useDemo } from "@/lib/demo-context";
export const Route = createFileRoute("/check")({ head: () => ({ meta: [{ title: "Check a Message — InvestorSafe AI" }, { name: "description", content: "Paste a suspicious investment message or upload a screenshot to look for possible warning signs." }, { property: "og:title", content: "Check a Message — InvestorSafe AI" }, { property: "og:description", content: "Check a suspicious investment message before taking action." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: CheckPage });
function CheckPage() {
 const {message, setMessage, fileName, setFileName, analyze} = useDemo();
 const [isDemo, setIsDemo] = useState(false); const [isReading, setIsReading] = useState(false); const [error, setError] = useState("");
 const inputRef = useRef<HTMLInputElement>(null); const navigate = useNavigate();
 async function handleFile(file?: File) {
   if (!file) return;
   if (!["image/png", "image/jpeg"].includes(file.type)) { setError("Choose a PNG or JPG image."); return; }
   if (file.size > 5 * 1024 * 1024) { setError("Choose an image smaller than 5 MB."); return; }
   setError(""); setFileName(file.name); setIsReading(true); setIsDemo(false);
   try { const { createWorker } = await import("tesseract.js"); const worker = await createWorker("eng"); try { const result = await worker.recognize(file); const text = result.data.text.trim(); if (!text) throw new Error("No readable text found. Try a clearer screenshot or paste the message instead."); setMessage(text.slice(0, 10000)); } finally { await worker.terminate(); } }
   catch (cause) { setError(cause instanceof Error ? cause.message : "Could not read this screenshot. Paste the message instead."); setFileName(""); }
   finally { setIsReading(false); }
 }
 function submit() { if (isReading) return; const text = message.trim(); if (!text) { setError("Paste a message or upload a readable screenshot first."); return; } if (text.length > 10000) { setError("Keep your message under 10,000 characters."); return; } setError(""); analyze(text, isDemo && text === DEMO_MESSAGE); navigate({to:"/analysis"}); }
 return <main className="page-wrap inner-page"><FlowSteps current={0}/><PageIntro eyebrow="STEP 01 / SHARE YOUR MESSAGE" title="What did you receive?" description="Paste the investment message or upload a screenshot."/>
 <div className="check-layout"><div className="check-main"><div className="field-top"><label htmlFor="message" className="field-label">Paste a message</label><span className="field-meta">{message.length.toLocaleString()} / 10,000</span></div><textarea id="message" value={message} maxLength={10000} onChange={(e)=>{setMessage(e.target.value);setIsDemo(false);setError("")}} placeholder="Paste the suspicious message here…" className="message-textarea"/><div className="field-bottom"><span>Messages are processed in your browser for this demo.</span>{message && <Button variant="ghost" size="sm" onClick={()=>{setMessage("");setFileName("");setIsDemo(false);setError("")}}><RotateCcw/> Clear</Button>}</div>
 <div className="divider-label"><span/>OR<span/></div><input ref={inputRef} type="file" accept="image/png,image/jpeg" className="sr-only" onChange={(e)=>{void handleFile(e.target.files?.[0]);e.target.value=""}} aria-label="Upload screenshot"/><Button variant="outline" className="upload-zone" onClick={()=>inputRef.current?.click()} disabled={isReading}><span className="upload-icon">{fileName ? <FileImage/> : <UploadCloud/>}</span><span className="upload-copy"><strong>{isReading ? "Reading screenshot…" : fileName || "Upload Screenshot"}</strong><small>{isReading ? "This may take a moment" : "PNG, JPG supported · Max 5 MB"}</small></span>{fileName && !isReading && <X className="ml-auto" onClick={(e)=>{e.stopPropagation();setFileName("");setMessage("")}}/>}</Button>
 {error && <p className="form-error" role="alert">{error}</p>}
 <div className="check-actions"><Button size="lg" onClick={submit} disabled={isReading}>Analyze Message <ArrowRight/></Button><Button variant="outline" size="lg" onClick={()=>{setMessage(DEMO_MESSAGE);setFileName("");setIsDemo(true);setError("")}}><Sparkles/> Try Demo Message</Button></div></div>
 <aside className="check-aside"><span className="aside-icon"><LockKeyhole className="size-6"/></span><h2>A quick privacy check</h2><p>Keep private information out of anything you share here.</p><ul><li>Never enter an OTP or PIN</li><li>Remove passwords and account numbers</li><li>Only share what is needed to review the message</li></ul><div className="aside-foot">Your text stays on this device in the prototype.</div></aside></div><div className="mt-10"><SafetyNote>Do not enter OTPs, passwords, PINs, or other sensitive financial information.</SafetyNote></div></main>;
}
