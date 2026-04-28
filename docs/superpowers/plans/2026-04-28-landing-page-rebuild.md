# Landing Page Full Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild all landing page sections from scratch to match the pain-first direct response structure defined in the design spec.

**Architecture:** Each section is a self-contained `"use client"` component in `components/`. New components are written first (tasks 1–9), then `app/page.tsx` is rewired and old files deleted in a single final task. This keeps the build green throughout.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion v12, shadcn/ui (new-york), lucide-react, `@splinetool/react-spline` (hero only)

---

## File Map

| Action | File |
|---|---|
| Rewrite | `components/HeroSection.tsx` |
| **Create** | `components/DailyLeak.tsx` |
| **Create** | `components/RealCost.tsx` |
| **Create** | `components/DreamState.tsx` |
| Rewrite | `components/WorkflowPipeline.tsx` |
| **Create** | `components/AuditSection.tsx` |
| **Create** | `components/ProductPaths.tsx` |
| Rewrite | `components/FAQSection.tsx` |
| Rewrite | `components/FinalCTA.tsx` |
| Update | `components/Header.tsx` |
| Rewrite | `app/page.tsx` |
| Delete | `components/SpeedSection.tsx` |
| Delete | `components/AIFrontDeskVisual.tsx` |
| Delete | `components/AuditCards.tsx` |
| Delete | `components/LiveDemoPanel.tsx` |

---

## Task 1: Create `DailyLeak.tsx`

**Files:**
- Create: `components/DailyLeak.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client"

import { motion } from "framer-motion"
import { Clock, RefreshCw, Timer, UserX, Layers, EyeOff } from "lucide-react"

const painPoints = [
  { icon: Clock, text: "Website enquiries arriving while your team is out showing properties" },
  { icon: RefreshCw, text: "Buyers asking the same questions your agents answer 30 times a week" },
  { icon: Timer, text: "Leads sitting for 4+ hours before anyone replies" },
  { icon: UserX, text: "Agents who mean to follow up but don't" },
  { icon: Layers, text: "Conversations scattered across website, WhatsApp, Messenger, and Instagram" },
  { icon: EyeOff, text: "No clear view of who replied, who followed up, and what got missed" },
]

export function DailyLeak() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Sound familiar?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            These are the six most common ways real estate teams lose leads before an agent ever steps in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-strong rounded-xl p-5 flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center text-destructive/70">
                <point.icon size={20} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build passes**

Run: `pnpm build`
Expected: Compiled successfully (DailyLeak is not yet imported anywhere — that's fine)

- [ ] **Step 3: Commit**

```bash
git add components/DailyLeak.tsx
git commit -m "feat: add DailyLeak section"
```

---

## Task 2: Create `RealCost.tsx`

**Files:**
- Create: `components/RealCost.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

function AnimatedStat({
  numericEnd,
  suffix = "",
  staticDisplay,
  label,
}: {
  numericEnd?: number
  suffix?: string
  staticDisplay?: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView || numericEnd === undefined) return
    let frame = 0
    const totalFrames = 60
    const timer = setInterval(() => {
      frame++
      setCount(Math.round((numericEnd * frame) / totalFrames))
      if (frame >= totalFrames) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, numericEnd])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-5xl sm:text-6xl font-light text-foreground mb-2">
        {staticDisplay ?? `${count}${suffix}`}
      </div>
      <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">{label}</p>
    </motion.div>
  )
}

export function RealCost() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
              Slow isn&apos;t neutral.
              <br />
              <span className="text-primary">It&apos;s expensive.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every hour a lead waits is an hour they&apos;re talking to someone else. Buyers who don&apos;t hear back move on. Agents who don&apos;t follow up lose commission. The agency absorbs the cost without ever seeing it on a spreadsheet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-2xl p-8 sm:p-10 space-y-8"
          >
            <AnimatedStat
              numericEnd={78}
              suffix="%"
              label="of buyers go with the first agent who responds"
            />
            <div className="border-t border-border/30" />
            <AnimatedStat
              numericEnd={4}
              suffix="+"
              label="hours — average response time without automation"
            />
            <div className="border-t border-border/30" />
            <AnimatedStat
              staticDisplay="1 in 3"
              label="leads never gets a follow-up"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build passes**

Run: `pnpm build`
Expected: Compiled successfully

- [ ] **Step 3: Commit**

```bash
git add components/RealCost.tsx
git commit -m "feat: add RealCost section with animated stats"
```

---

## Task 3: Create `DreamState.tsx`

**Files:**
- Create: `components/DreamState.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client"

import { motion } from "framer-motion"
import { X, Check } from "lucide-react"

const beforeItems = [
  "Enquiry arrives at 11pm — no reply",
  "Agent forgets to follow up",
  "Buyer details never captured",
  "Manager chasing people for updates",
  "Lead goes cold",
]

const afterItems = [
  "Enquiry replied to in under 10 seconds",
  "Budget, timeline, location captured automatically",
  "Viewing booked before agent wakes up",
  "Agent gets a clean handoff summary",
  "Manager sees everything without asking",
]

export function DreamState() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 text-balance">
            What your agency looks like when the first layer is handled.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-6 sm:p-8 border-destructive/20"
          >
            <h3 className="text-sm font-medium text-destructive/70 uppercase tracking-wider mb-6">
              Before
            </h3>
            <div className="space-y-4">
              {beforeItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                    <X size={10} className="text-destructive/60" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-2xl p-6 sm:p-8 border-primary/30 glow-primary-sm"
          >
            <h3 className="text-sm font-medium text-primary uppercase tracking-wider mb-6">
              After
            </h3>
            <div className="space-y-4">
              {afterItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check size={10} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build passes**

Run: `pnpm build`
Expected: Compiled successfully

- [ ] **Step 3: Commit**

```bash
git add components/DreamState.tsx
git commit -m "feat: add DreamState before/after section"
```

---

## Task 4: Rewrite `WorkflowPipeline.tsx`

**Files:**
- Modify: `components/WorkflowPipeline.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
"use client"

import { motion } from "framer-motion"
import { MessageSquare, Zap, ClipboardCheck, Home, Calendar, Users, Bell } from "lucide-react"

const steps = [
  { icon: MessageSquare, title: "Lead arrives", description: "A buyer sends a message" },
  { icon: Zap, title: "AI replies", description: "Instant response, under 10 seconds" },
  { icon: ClipboardCheck, title: "Details captured", description: "Budget, location, timeline, intent" },
  { icon: Home, title: "Listing matched", description: "Relevant property suggested" },
  { icon: Calendar, title: "Next step booked", description: "Viewing or call confirmed" },
  { icon: Users, title: "Agent handed off", description: "Clean summary, ready to close" },
  { icon: Bell, title: "Follow-up scheduled", description: "Reminder set, nothing dropped" },
]

export function WorkflowPipeline() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4">
            One lead. Seven steps.{" "}
            <span className="text-primary">Zero manual work.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            This is what the assistant does from the moment a message arrives.
          </p>
        </motion.div>

        {/* Desktop: horizontal pipeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-8 left-[5%] right-[5%] h-0.5 bg-border/50">
              <motion.div
                className="h-full bg-gradient-to-r from-primary/60 via-primary/40 to-transparent"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, delay: 0.3 }}
              />
            </div>
            <motion.div
              className="absolute top-[26px] w-3 h-3 rounded-full bg-primary/80 glow-primary"
              initial={{ left: "5%" }}
              animate={{ left: "95%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            />
            <div className="flex items-start justify-between relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="flex flex-col items-center text-center w-24"
                >
                  <motion.div
                    className="w-16 h-16 rounded-xl glass-strong border border-primary/30 flex items-center justify-center text-primary mb-4 hover:border-primary/60 transition-colors"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <step.icon size={22} />
                  </motion.div>
                  <h3 className="text-xs font-medium text-foreground mb-1">{step.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-snug">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border/50">
              <motion.div
                className="w-full bg-gradient-to-b from-primary/60 via-primary/40 to-transparent"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
            </div>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg glass-strong border border-primary/30 flex items-center justify-center text-primary flex-shrink-0 z-10">
                    <step.icon size={18} />
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-sm font-medium text-foreground mb-0.5">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build passes**

Run: `pnpm build`
Expected: Compiled successfully

- [ ] **Step 3: Commit**

```bash
git add components/WorkflowPipeline.tsx
git commit -m "feat: rewrite WorkflowPipeline with 7 steps and pain-first copy"
```

---

## Task 5: Create `AuditSection.tsx`

**Files:**
- Create: `components/AuditSection.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client"

import { motion } from "framer-motion"
import { Search, Clock, TrendingDown, Lightbulb, FileText, ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const auditItems = [
  { icon: Search, text: "How your leads currently arrive and where they slow down" },
  { icon: Clock, text: "Where your team's time is being wasted on repetitive tasks" },
  { icon: TrendingDown, text: "Which leads are falling through the gaps" },
  { icon: Lightbulb, text: "The first 3 automation opportunities worth building" },
  { icon: FileText, text: "A plain-English summary you can act on immediately" },
]

export function AuditSection() {
  return (
    <section id="audit" className="py-20 sm:py-28 lg:py-32 bg-black">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 text-balance">
            Find out exactly where your agency is losing leads.
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            The free AI audit is a 25-minute call. No pitch. No fluff. Just a clear picture of where the gaps are.
          </p>
        </motion.div>

        <div className="space-y-4 mb-12 text-left">
          {auditItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 glass-strong rounded-xl px-5 py-4"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <item.icon size={18} />
              </div>
              <span className="text-sm text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary-sm text-base px-8 py-6 transition-all duration-200 hover:scale-[1.02]"
            asChild
          >
            <a href="#book-audit" className="flex items-center gap-2">
              <Calendar size={20} />
              Book Free AI Audit
              <ArrowRight size={20} />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">No pressure. No technical setup. Cancel any time.</p>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build passes**

Run: `pnpm build`
Expected: Compiled successfully

- [ ] **Step 3: Commit**

```bash
git add components/AuditSection.tsx
git commit -m "feat: add AuditSection with 5-item audit list and CTA"
```

---

## Task 6: Create `ProductPaths.tsx`

**Files:**
- Create: `components/ProductPaths.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client"

import { motion } from "framer-motion"
import { MessageSquare, Zap } from "lucide-react"

const products = [
  {
    icon: MessageSquare,
    title: "24/7 Website Chat Assistant",
    description:
      "Handles every website enquiry instantly. Qualifies the lead, captures details, and prepares a clean handoff — before your agents even see the message.",
    tags: ["Website", "WhatsApp", "Messenger"],
  },
  {
    icon: Zap,
    title: "AI Automation System",
    description:
      "Connects your lead sources, CRM, and follow-up sequences. Removes the manual steps your team repeats every day so agents focus on deals, not admin.",
    tags: ["CRM", "Follow-up", "Reminders"],
  },
]

export function ProductPaths() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Two ways we build{" "}
            <span className="text-primary">after the audit.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Every agency gets a different starting point. These are the two most common first builds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-strong rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                <product.icon size={24} />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">{product.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{product.description}</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Not sure which fits? The audit tells you.
        </motion.p>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build passes**

Run: `pnpm build`
Expected: Compiled successfully

- [ ] **Step 3: Commit**

```bash
git add components/ProductPaths.tsx
git commit -m "feat: add ProductPaths section with two product cards"
```

---

## Task 7: Rewrite `FAQSection.tsx`

**Files:**
- Modify: `components/FAQSection.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Will this replace our agents?",
    answer: "No. It handles the repetitive first layer. Agents still handle trust, negotiation, and closing.",
  },
  {
    question: "Can this work with our current process?",
    answer: "Yes. The first version sits beside your current workflow without changing everything.",
  },
  {
    question: "Does this work outside the website — WhatsApp, Messenger, Instagram?",
    answer: "Yes. Channel integrations can be added once the core workflow is clear.",
  },
  {
    question: "Is this hard to set up?",
    answer: "No. We handle the build. You describe the workflow, we configure it, and you review before it goes live.",
  },
  {
    question: "What happens on the free audit?",
    answer: "We review how your leads arrive, where time is wasted, and identify the first 3 automation opportunities worth building.",
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on workflow size, channels, and maintenance. The audit defines the first useful build and gives you a clear number.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
            Questions we hear{" "}
            <span className="text-primary">before every audit.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-strong rounded-xl px-5 sm:px-6 border-border/50 data-[state=open]:border-primary/50 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-4 sm:py-5">
                  <span className="text-foreground font-medium text-left text-sm sm:text-base">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build passes**

Run: `pnpm build`
Expected: Compiled successfully

- [ ] **Step 3: Commit**

```bash
git add components/FAQSection.tsx
git commit -m "feat: rewrite FAQSection with 6 questions and new headline"
```

---

## Task 8: Rewrite `FinalCTA.tsx`

**Files:**
- Modify: `components/FinalCTA.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, MessageSquare, User, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

const floatingChips = [
  { text: "Message handled", icon: MessageSquare, position: "top-6 left-6 sm:top-10 sm:left-10" },
  { text: "CRM updated", icon: User, position: "top-6 right-6 sm:top-10 sm:right-10" },
  { text: "Follow-up sent", icon: Bell, position: "bottom-6 left-1/2 -translate-x-1/2" },
]

export function FinalCTA() {
  return (
    <section id="book-audit" className="py-20 sm:py-28 lg:py-32 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl glass-strong border border-primary/30 p-8 sm:p-12 lg:p-16 text-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-primary/20 rounded-full blur-[60px] pointer-events-none" />

          {floatingChips.map((chip, i) => (
            <motion.div
              key={chip.text}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.2 }}
              animate={{ y: [0, -4, 0] }}
              className={`absolute hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 border border-border/50 text-xs text-muted-foreground ${chip.position}`}
            >
              <chip.icon size={12} className="text-primary" />
              {chip.text}
            </motion.div>
          ))}

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground mb-4 text-balance">
              Stop losing leads to slow replies.
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8">
              Book a free 25-minute AI audit and leave with a clear picture of where your agency is leaking revenue — and what to fix first.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary-sm text-base px-8 py-6 transition-all duration-200 hover:scale-[1.02]"
                asChild
              >
                <a href="#book-audit" className="flex items-center gap-2">
                  <Calendar size={20} />
                  Book Free AI Audit
                  <ArrowRight size={20} />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">No pressure. No technical setup.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build passes**

Run: `pnpm build`
Expected: Compiled successfully

- [ ] **Step 3: Commit**

```bash
git add components/FinalCTA.tsx
git commit -m "feat: rewrite FinalCTA with pain-first headline"
```

---

## Task 9: Rewrite `HeroSection.tsx`

**Files:**
- Modify: `components/HeroSection.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance leading-tight">
              Your leads are arriving.
              <br />
              <span className="text-primary font-normal">
                Someone else is answering them.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Slow replies, missed follow-ups, and scattered conversations are costing your agency commission every week.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary-sm text-base px-8 py-6 transition-all duration-200 hover:scale-[1.02]"
                asChild
              >
                <a href="#book-audit" className="flex items-center gap-2">
                  <Calendar size={20} />
                  Book Free AI Audit
                  <ArrowRight size={20} />
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              25 minutes. No pressure. No technical setup.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-first lg:order-last"
          >
            <div className="w-full h-[400px] sm:h-[500px] relative overflow-hidden bg-black rounded-[32px] shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_80%)] pointer-events-none" />
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20 opacity-20"
                fill="var(--primary)"
              />
              <div className="relative z-10 w-full h-full">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify build passes**

Run: `pnpm build`
Expected: Compiled successfully

- [ ] **Step 3: Commit**

```bash
git add components/HeroSection.tsx
git commit -m "feat: rewrite HeroSection with pain-first headline"
```

---

## Task 10: Update `Header.tsx` nav links

**Files:**
- Modify: `components/Header.tsx`

- [ ] **Step 1: Update the `navLinks` array**

Find the `navLinks` array (currently at the top of the file, around line 3–8) and replace it with:

```tsx
const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "The Audit", href: "#audit" },
  { label: "FAQ", href: "#faq" },
]
```

The rest of the file is unchanged.

- [ ] **Step 2: Verify build passes**

Run: `pnpm build`
Expected: Compiled successfully

- [ ] **Step 3: Commit**

```bash
git add components/Header.tsx
git commit -m "feat: update Header nav links to match new section IDs"
```

---

## Task 11: Wire `app/page.tsx`, delete old files, final build

**Files:**
- Modify: `app/page.tsx`
- Delete: `components/SpeedSection.tsx`
- Delete: `components/AIFrontDeskVisual.tsx`
- Delete: `components/AuditCards.tsx`
- Delete: `components/LiveDemoPanel.tsx`

- [ ] **Step 1: Replace `app/page.tsx` entirely**

```tsx
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { DailyLeak } from "@/components/DailyLeak"
import { RealCost } from "@/components/RealCost"
import { DreamState } from "@/components/DreamState"
import { WorkflowPipeline } from "@/components/WorkflowPipeline"
import { AuditSection } from "@/components/AuditSection"
import { ProductPaths } from "@/components/ProductPaths"
import { FAQSection } from "@/components/FAQSection"
import { FinalCTA } from "@/components/FinalCTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DailyLeak />
      <RealCost />
      <DreamState />
      <WorkflowPipeline />
      <AuditSection />
      <ProductPaths />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
```

- [ ] **Step 2: Delete the four removed section files**

```bash
git rm components/SpeedSection.tsx components/AIFrontDeskVisual.tsx components/AuditCards.tsx components/LiveDemoPanel.tsx
```

- [ ] **Step 3: Run the final build**

Run: `pnpm build`
Expected: Compiled successfully with no errors

- [ ] **Step 4: Commit everything**

```bash
git add app/page.tsx
git commit -m "feat: wire new section order in page.tsx, remove old section files"
```

---

## Self-Review Checklist

- [x] **Spec coverage:** All 9 sections + Header update + page.tsx wiring = 11 tasks. All spec sections covered.
- [x] **Placeholder scan:** No TBDs. All component code is complete. All icon imports are named. All class names (`glass-strong`, `glow-primary-sm`) are confirmed in globals.css.
- [x] **Type consistency:** `AnimatedStat` props (`numericEnd`, `suffix`, `staticDisplay`, `label`) defined in Task 2 and used only in Task 2. `WorkflowPipeline` export name unchanged from old file — page.tsx import still resolves. `FAQSection`, `FinalCTA`, `HeroSection` — same export names, no renaming issues.
- [x] **Footer:** Spec says no changes — correctly omitted from tasks.
- [x] **`app/metadata`:** `app/layout.tsx` is untouched — title and description remain. No spec requirement to change them.
