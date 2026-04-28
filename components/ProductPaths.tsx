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
