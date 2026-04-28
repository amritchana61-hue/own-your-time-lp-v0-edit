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
