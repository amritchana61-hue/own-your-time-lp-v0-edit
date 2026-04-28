# Landing Page Full Rebuild — Design Spec
**Date:** 2026-04-28  
**Project:** Own Your Time — AI Assistants for Real Estate Teams  
**Goal:** Rebuild the landing page from scratch to match the pain-first direct response structure defined in IMPLEMENTATIONPLAN_SECTION.md.

---

## Decisions

| Decision | Choice |
|---|---|
| Approach | Full scratch rebuild (Option A) — delete all existing section files, write 9 new ones |
| Tone | Pain-first, direct (Option A from the plan) |
| Hero visual | Keep Spline 3D robot in hero only — remove from all other sections |
| CTA links | `#book-audit` placeholder anchors throughout |
| Visual system | Preserve existing dark theme, glass cards, Tailwind CSS v4, Framer Motion, shadcn/ui |

---

## Section Order

```
Header (update nav links)
1. HeroSection
2. DailyLeak        ← new file
3. RealCost         ← new file
4. DreamState       ← new file
5. WorkflowPipeline ← full rewrite
6. AuditSection     ← replaces AuditCards
7. ProductPaths     ← new file
8. FAQSection       ← rewrite
9. FinalCTA         ← rewrite
Footer (no changes)
```

Files to delete: `SpeedSection.tsx`, `AIFrontDeskVisual.tsx`, `AuditCards.tsx`, `LiveDemoPanel.tsx`

---

## Section Specs

### 1. `HeroSection.tsx`

**Layout:** Two-column (copy left, Spline robot right). Same container dimensions as current.

**Headline:** `"Your leads are arriving. Someone else is answering them."`

**Subheadline:** `"Slow replies, missed follow-ups, and scattered conversations are costing your agency commission every week."`

**CTA:** Button — `Book Free AI Audit` → `#book-audit`

**Trust note:** `25 minutes. No pressure. No technical setup.`

**Visual:** Spline scene `https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode` — same rounded container, same Spotlight glow. No chat bubble overlays.

**Animation:** Copy fades/slides up on mount. Robot container fades/scales in with slight delay.

---

### 2. `DailyLeak.tsx`

**Layout:** Full-width section. Centered headline + subheadline. Below: 3×2 grid of pain point cards.

**Headline:** `"Sound familiar?"`

**Subheadline:** `"These are the six most common ways real estate teams lose leads before an agent ever steps in."`

**6 Pain cards** (icon + one-line headline each):
1. `Clock` — Website enquiries arriving while your team is out showing properties
2. `RefreshCw` — Buyers asking the same questions your agents answer 30 times a week
3. `Timer` — Leads sitting for 4+ hours before anyone replies
4. `UserX` — Agents who mean to follow up but don't
5. `Layers` — Conversations scattered across website, WhatsApp, Messenger, and Instagram
6. `EyeOff` — No clear view of who replied, who followed up, and what got missed

**Visual treatment:** Dark glass cards (`glass-strong`). Staggered scroll-in animation (Framer Motion `whileInView`). No heavy visuals — copy carries the weight.

---

### 3. `RealCost.tsx`

**Layout:** Two-column. Left: problem framing copy. Right: stat block with 3 large numbers.

**Headline:** `"Slow isn't neutral. It's expensive."`

**Body copy:** `"Every hour a lead waits is an hour they're talking to someone else. Buyers who don't hear back move on. Agents who don't follow up lose commission. The agency absorbs the cost without ever seeing it on a spreadsheet."`

**Stat block (right column):**
- `78%` — of buyers go with the first agent who responds
- `4+ hours` — average response time without automation
- `1 in 3` — leads never gets a follow-up

**Animation:** Each stat number counts up from 0 on scroll-in using Framer Motion animate. Stats reveal staggered.

---

### 4. `DreamState.tsx`

**Layout:** Full-width. Centered headline. Below: two equal columns — Before (left) and After (right).

**Headline:** `"What your agency looks like when the first layer is handled."`

**Before column** (dimmed, muted red/warning tint on icons):
- Enquiry arrives at 11pm — no reply
- Agent forgets to follow up
- Buyer details never captured
- Manager chasing people for updates
- Lead goes cold

**After column** (bright, primary/white accents, subtle glow):
- Enquiry replied to in under 10 seconds
- Budget, timeline, location captured automatically
- Viewing booked before agent wakes up
- Agent gets a clean handoff summary
- Manager sees everything without asking

**Animation:** Before items fade in first with slightly dimmed treatment. After items slide in with stagger after Before column settles. A subtle `border-primary/30` glow on the After column container.

---

### 5. `WorkflowPipeline.tsx`

**Layout:** Centered headline + subheadline. Horizontal 7-step pipeline on desktop (with animated connector line), vertical stack on mobile. Section ID: `#how-it-works`.

**Headline:** `"One lead. Seven steps. Zero manual work."`

**Subheadline:** `"This is what the assistant does from the moment a message arrives."`

**7 Steps:**
1. `MessageSquare` — Lead arrives — A buyer sends a message
2. `Zap` — AI replies — Instant response, under 10 seconds
3. `ClipboardCheck` — Details captured — Budget, location, timeline, intent
4. `Home` — Listing matched — Relevant property suggested
5. `Calendar` — Next step booked — Viewing or call confirmed
6. `Users` — Agent handed off — Clean summary, ready to close
7. `Bell` — Follow-up scheduled — Reminder set, nothing dropped

**Animation:** Animated connector line travels left-to-right on scroll-in. Traveling pulse dot. Each step node fades in as the line reaches it.

---

### 6. `AuditSection.tsx`

**Layout:** Full-width centered. Large headline + subheadline. Below: 5-item list. Below that: CTA button. Section ID: `#audit`.

**Headline:** `"Find out exactly where your agency is losing leads."`

**Subheadline:** `"The free AI audit is a 25-minute call. No pitch. No fluff. Just a clear picture of where the gaps are."`

**5 audit items** (icon + label each):
1. `Search` — How your leads currently arrive and where they slow down
2. `Clock` — Where your team's time is being wasted on repetitive tasks
3. `TrendingDown` — Which leads are falling through the gaps
4. `Lightbulb` — The first 3 automation opportunities worth building
5. `FileText` — A plain-English summary you can act on immediately

**CTA:** `Book Free AI Audit` → `#book-audit`

**Trust note:** `No pressure. No technical setup. Cancel any time.`

---

### 7. `ProductPaths.tsx`

**Layout:** Centered headline + subheadline. Two equal product cards side by side (stack on mobile).

**Headline:** `"Two ways we build after the audit."`

**Subheadline:** `"Every agency gets a different starting point. These are the two most common first builds."`

**Card 1 — 24/7 Website Chat Assistant:**
- Icon: `MessageSquare`
- Description: Handles every website enquiry instantly. Qualifies the lead, captures details, and prepares a clean handoff — before your agents even see the message.
- Tags: `Website`, `WhatsApp`, `Messenger`

**Card 2 — AI Automation System:**
- Icon: `Zap`
- Description: Connects your lead sources, CRM, and follow-up sequences. Removes the manual steps your team repeats every day so agents focus on deals, not admin.
- Tags: `CRM`, `Follow-up`, `Reminders`

**Note below cards:** `"Not sure which fits? The audit tells you."`

**Animation:** Cards slide in from opposite sides on scroll. Subtle hover glow (`hover:border-primary/50`).

---

### 8. `FAQSection.tsx`

**Layout:** Centered, `max-w-3xl`. Accordion. Section ID: `#faq`.

**Headline:** `"Questions we hear before every audit."`

**6 FAQ items:**
1. Will this replace our agents? — *No. It handles the repetitive first layer. Agents still handle trust, negotiation, and closing.*
2. Can this work with our current process? — *Yes. The first version sits beside your current workflow without changing everything.*
3. Does this work outside the website — WhatsApp, Messenger, Instagram? — *Yes. Channel integrations can be added once the core workflow is clear.*
4. Is this hard to set up? — *No. We handle the build. You describe the workflow, we configure it, and you review before it goes live.*
5. What happens on the free audit? — *We review how your leads arrive, where time is wasted, and identify the first 3 automation opportunities worth building.*
6. How much does it cost? — *Pricing depends on workflow size, channels, and maintenance. The audit defines the first useful build and gives you a clear number.*

---

### 9. `FinalCTA.tsx`

**Layout:** Full-width dark card with glow. Centered content. Section ID: `#book-audit`.

**Headline:** `"Stop losing leads to slow replies."`

**Subheadline:** `"Book a free 25-minute AI audit and leave with a clear picture of where your agency is leaking revenue — and what to fix first."`

**CTA:** `Book Free AI Audit` → `#book-audit`

**Trust note:** `No pressure. No technical setup.`

**Floating chips** (ambient hover animation, hidden on mobile):
- `Message handled` (MessageSquare icon) — top-left
- `CRM updated` (User icon) — top-right
- `Follow-up sent` (Bell icon) — bottom-center

---

### Header — nav link updates

Updated links:
- `How It Works` → `#how-it-works`
- `The Audit` → `#audit`
- `FAQ` → `#faq`
- Remove `Demo` link (LiveDemoPanel section is being deleted)

CTA button unchanged: `Book Free AI Audit` → `#book-audit`

---

### Footer — no changes

---

## Files to Create

| File | Status |
|---|---|
| `components/HeroSection.tsx` | Rewrite |
| `components/DailyLeak.tsx` | New |
| `components/RealCost.tsx` | New |
| `components/DreamState.tsx` | New |
| `components/WorkflowPipeline.tsx` | Rewrite |
| `components/AuditSection.tsx` | New (replaces AuditCards) |
| `components/ProductPaths.tsx` | New |
| `components/FAQSection.tsx` | Rewrite |
| `components/FinalCTA.tsx` | Rewrite |
| `components/Header.tsx` | Update nav links |
| `app/page.tsx` | Update imports + section order |

## Files to Delete

- `components/SpeedSection.tsx`
- `components/AIFrontDeskVisual.tsx`
- `components/AuditCards.tsx`
- `components/LiveDemoPanel.tsx`

---

## Visual System (unchanged)

- Background: pure black (`oklch(0 0 0)`)
- Dark-only, no light mode
- Glass cards: `glass` and `glass-strong` utility classes from `globals.css`
- Animations: Framer Motion `whileInView` with `viewport={{ once: true }}`
- Font: Geist (sans), Geist Mono
- Icons: lucide-react
- Primary color: `oklch(0.98 0 0)` (off-white/white)
- Spacing: `py-20 sm:py-28 lg:py-32` per section, `max-w-6xl` container
