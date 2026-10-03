# Investor Safe AI

Build a modern, responsive web prototype called **InvestorSafe AI**.

### Purpose

InvestorSafe AI is an investor-safety assistant for people who receive suspicious investment messages through WhatsApp, Telegram, Instagram, SMS, or other digital platforms.

The tool helps users:

* analyze suspicious investment messages or screenshots
* identify possible scam warning signs
* extract important details such as URLs, phone numbers, UPI IDs, and app/platform names
* understand what they should verify
* follow safe next steps

IMPORTANT:
This is NOT an investment advisory tool.
Do NOT provide stock buy/sell/hold recommendations, investment predictions, profit predictions, or financial advice.
Do not claim that a message is definitely a scam. Use language such as “Potential warning signs detected” and “Please verify before taking action.”

## DESIGN

Create a professional fintech/cyber-safety interface.

Style:

* Dark navy/blue background
* Clean glassmorphism cards
* Cyan/blue accent elements
* Clear white typography
* Subtle gradients
* Soft shadows
* Smooth animations
* Responsive for desktop and mobile
* Accessible contrast
* Simple language suitable for first-time investors

Do NOT make it look like a trading platform.
Do NOT show stock charts, stock prices, buy/sell buttons, or investment recommendations.

---

# SCREEN 1 — HOME

Header:

* Logo: InvestorSafe AI
* Navigation: Home | How It Works | Safety

Hero title:
**“Check Before You Invest.”**

Subtitle:
“Understand suspicious investment messages, identify warning signs, and verify important details before taking action.”

Primary button:
**Check a Message**

Secondary button:
**How It Works**

Add a small safety note:
“InvestorSafe AI provides safety awareness and verification guidance. It does not provide investment advice.”

Add 3 feature cards:

1. **AI Scam Analysis**
   “Identify possible warning signs in investment messages.”

2. **Smart Detail Detection**
   “Find URLs, phone numbers, UPI IDs and platform names.”

3. **Verification Guidance**
   “Know what to verify and where to verify it.”

---

# SCREEN 2 — CHECK MESSAGE

Title:
**“What did you receive?”**

Subtitle:
“Paste the investment message or upload a screenshot.”

Create two input options:

### Option A

Large text area:
Placeholder:
“Paste the suspicious message here…”

### Option B

Upload card:
“Upload Screenshot”
“PNG, JPG supported”

Add example button:
**Try Demo Message**

When clicked, insert this demo message:

“Invest ₹10,000 today and get ₹30,000 guaranteed in 10 days. Join our Telegram group now and download our trading app.”

Primary button:
**Analyze Message**

Add privacy note:
“Do not enter OTPs, passwords, PINs, or other sensitive financial information.”

---

# SCREEN 3 — AI ANALYSIS

After clicking Analyze Message, show an animated analysis screen.

Title:
**“Analyzing the message…”**

Show progress steps:

✓ Reading message
✓ Detecting warning signs
✓ Extracting important details
○ Preparing verification guidance

After a short animation, automatically continue to Screen 4.

Show detected entities in demo mode:

* Platform: Telegram
* App mentioned: Example Trading App
* URL: example-trading-site.com

Clearly label demo data where appropriate.

---

# SCREEN 4 — RISK RESULTS

Title:
**“Potential Warning Signs”**

Do NOT say “100% Scam.”

Show a prominent status card:

**Potential warning signs detected**

Add explanation:
“This message contains several signals that deserve verification before you take any action.”

Show warning cards:

### Warning 1

**Guaranteed Returns**
“Promises of guaranteed or unusually high returns can be a warning sign.”

### Warning 2

**Urgent Pressure**
“The message asks the user to act quickly.”

### Warning 3

**External Platform**
“The message directs the user to another platform or app.”

Add section:
**Why this matters**

“Scam messages often use attractive promises and urgency to make people act before checking the details.”

Add buttons:
**Verify Details**
**Back to Message**

---

# SCREEN 5 — VERIFY DETAILS

Title:
**“Verify Before You Act”**

Subtitle:
“Use the appropriate official source to check the details found in the message.”

Create verification cards:

### Trading App / Intermediary

“Check whether the entity is registered with SEBI.”

Button:
**Official SEBI Verification**

### UPI / Bank / Payment Detail

“Use the relevant official verification mechanism before making a payment.”

Button:
**SEBI Check**

### Phone / Email / UPI / URL

“Check whether the identifier appears in the available cybercrime suspect repository.”

Button:
**I4C Suspect Search**

### Website / Link

“Review the website carefully and avoid entering sensitive information until verified.”

Add warning:
“An absence from a database does not prove that something is genuine.”

Buttons:
**Continue to Safety Guide**
**Back to Results**

Use official-source links in the prototype where appropriate.

---

# SCREEN 6 — SAFETY GUIDE

Title:
**“Stay Safe”**

Show a simple checklist:

✓ Do not send money before verification
✓ Do not share OTPs, passwords, PINs, or sensitive financial information
✓ Be careful with guaranteed-return claims
✓ Do not install unknown APKs or apps from untrusted sources
✓ Verify the organisation/person through official sources
✓ Keep evidence such as messages, links, and transaction details if reporting is necessary

Section:
**If you believe you have encountered fraud**

Provide a button:
**Report / Get Help**

Use official Indian cybercrime reporting resources.

Add final message:

**“Pause. Verify. Then Decide.”**

Small disclaimer:
“InvestorSafe AI is an awareness and verification-support tool, not an investment advisor.”

---

# NAVIGATION

Implement working navigation:

Home
→ Check Message
→ AI Analysis
→ Risk Results
→ Verify Details
→ Safety Guide

Buttons must actually work.

“Back” buttons should return to the previous screen.

“Try Demo Message” should populate the example automatically.

“Analyze Message” should run the demo analysis flow.

---

# DEMO EXPERIENCE

The complete demo should work without requiring the user to create an account.

Use the provided demo message as the default demonstration.

The prototype should clearly demonstrate:

Message
→ AI analysis
→ Warning signs
→ Extracted details
→ Verification guidance
→ Safety steps

Make the experience polished enough for a 3–5 minute hackathon demo.

## Technical preference

Use React with a clean component structure.

Use mock/demo data where real APIs are not available.

Keep the architecture ready for future integration with:

* LLM-based text analysis
* OCR for screenshots
* official verification APIs/services where available

Do not fabricate verification results from official databases. If a real API is unavailable, clearly label the result as demo/mock data.

Focus on a polished, functional MVP rather than adding unnecessary features.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/670da242-779d-4518-a898-8d7e1ea398d7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
