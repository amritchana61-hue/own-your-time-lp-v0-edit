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
