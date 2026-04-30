"use client"

import { motion } from "framer-motion"
import { Shield, Layers, Users, UserCheck } from "lucide-react"

const roadblocks = [
  {
    icon: Shield,
    title: "GDPR & Data Protection Handled",
    description: "Lead capture includes proper consent flows. Compliant by design. No legal anxiety.",
    color: "#00E8ED", // cyan
  },
  {
    icon: Layers,
    title: "Say Goodbye to WhatsApp Chaos",
    description: "All leads. One place. No more Excel sprawl. Every message logged. Nothing lost.",
    color: "#22c55e", // green
  },
  {
    icon: Users,
    title: "Transparent Routing Rules",
    description: "Your routing logic. Your fairness rules. Agents see it is fair. No resentment.",
    color: "#FFD800", // yellow
  },
  {
    icon: UserCheck,
    title: "Your Team Stays in Control",
    description: "Bot handles triage. Qualified leads go to agents. You stay in the loop. Always.",
    color: "#f97316", // orange
  },
]

export function RoadblocksWeSolve() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-card/10 to-black pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 text-balance">
            Concerns we handle{" "}
            <span className="text-primary">before you ask.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Every blocker that stops teams from adopting automation. Addressed.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {roadblocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div 
                className="glass-strong rounded-2xl p-6 sm:p-8 border border-border/50 h-full transition-all duration-300 hover:border-primary/30"
                style={{
                  background: `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)`,
                }}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative"
                  style={{
                    background: `linear-gradient(135deg, ${block.color}15 0%, ${block.color}05 100%)`,
                    border: `1px solid ${block.color}30`,
                  }}
                >
                  <block.icon 
                    size={24} 
                    style={{ color: block.color }}
                  />
                  
                  {/* Pulse effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: `0 0 20px ${block.color}30` }}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-medium text-foreground mb-3">
                  {block.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {block.description}
                </p>
              </div>

              {/* Subtle glow behind card on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                style={{ background: `${block.color}10` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
