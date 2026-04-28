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
