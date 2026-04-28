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
