import { createContext, useContext, useState, type ReactNode } from "react";

export const DEMO_MESSAGE = "Invest ₹10,000 today and get ₹30,000 guaranteed in 10 days. Join our Telegram group now and download our trading app.";

export type Finding = { title: string; description: string; icon: "returns" | "pressure" | "platform" };
export type Detail = { label: string; value: string; sample?: boolean };
export type Analysis = { findings: Finding[]; details: Detail[]; demo: boolean };

function inspectMessage(message: string, demo: boolean): Analysis {
  const findings: Finding[] = [];
  const details: Detail[] = [];
  const text = message.toLowerCase();
  if (/guaranteed|assured|risk.free|double (?:your|the) money|\d+%\s*(?:return|profit)/i.test(message)) {
    findings.push({ title: "Guaranteed Returns", description: "Promises of guaranteed or unusually high returns can be a warning sign.", icon: "returns" });
  }
  if (/today|now|hurry|limited time|urgent|immediately|\b\d+ days\b/i.test(message)) {
    findings.push({ title: "Urgent Pressure", description: "The message asks you to act quickly. Take time to check the details first.", icon: "pressure" });
  }
  const platforms = ["Telegram", "WhatsApp", "Instagram", "Signal", "Facebook"];
  const detectedPlatforms = platforms.filter((name) => text.includes(name.toLowerCase()));
  if (/\b(app|apk|group|channel|download|join)\b/i.test(message) || detectedPlatforms.length > 0) {
    findings.push({ title: "External Platform", description: "The message directs you to another platform, group, or app.", icon: "platform" });
  }
  detectedPlatforms.forEach((value) => details.push({ label: "Platform", value }));
  const upis = message.match(/\b[a-z0-9._-]+@(?:upi|ybl|ibl|axl|okaxis|okhdfcbank|oksbi|okicici|paytm|apl|sbi|icici|hdfcbank|airtel|fbl)\b/gi) ?? [];
  [...new Set(upis)].slice(0, 3).forEach((value) => details.push({ label: "UPI ID", value }));
  const emails = message.match(/\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/gi) ?? [];
  [...new Set(emails)].slice(0, 3).forEach((value) => details.push({ label: "Email", value }));
  const urls = message.match(/(?:https?:\/\/)?(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s]*)?/gi) ?? [];
  [...new Set(urls)].filter((value) => !emails.some((email) => email.endsWith(value))).slice(0, 4).forEach((value) => details.push({ label: "URL", value }));
  const phones = message.match(/(?:\+91[\s-]?)?[6-9]\d{9}\b/g) ?? [];
  [...new Set(phones)].slice(0, 3).forEach((value) => details.push({ label: "Phone", value }));
  if (demo) {
    details.push({ label: "App mentioned", value: "Example Trading App", sample: true });
    details.push({ label: "URL", value: "example-trading-site.com", sample: true });
  }
  return { findings, details, demo };
}

type DemoContextValue = {
  message: string;
  setMessage: (value: string) => void;
  fileName: string;
  setFileName: (value: string) => void;
  analysis: Analysis | null;
  analyze: (text: string, demo?: boolean) => void;
};
const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  return <DemoContext.Provider value={{ message, setMessage, fileName, setFileName, analysis, analyze: (text, demo = false) => setAnalysis(inspectMessage(text, demo)) }}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) throw new Error("DemoProvider is missing");
  return context;
}
