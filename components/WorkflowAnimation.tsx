"use client"

import { motion } from "framer-motion"
import { Zap, MessageSquare, ClipboardCheck, Home, Calendar, Users, Bell } from "lucide-react"

const workflowSteps = [
  { 
    icon: MessageSquare, 
    title: "Lead Arrives", 
    example: '"Any 4-bed homes near downtown?"',
    color: "#00E8ED" // cyan
  },
  { 
    icon: Zap, 
    title: "AI Responds", 
    example: "Found 12 matches. Price: $380k-$520k",
    color: "#FFD800" // yellow
  },
  { 
    icon: ClipboardCheck, 
    title: "Details Captured", 
    example: "Budget: $450k | Beds: 4 | Area: Downtown",
    color: "#FF008B" // pink
  },
  { 
    icon: Home, 
    title: "Property Matched", 
    example: "Oak Street Home - Perfect fit!",
    color: "#22c55e" // green
  },
  { 
    icon: Calendar, 
    title: "Viewing Booked", 
    example: "Saturday 2 PM - Calendar sent",
    color: "#06b6d4" // cyan
  },
  { 
    icon: Users, 
    title: "Agent Handoff", 
    example: "Full summary ready for closing",
    color: "#f97316" // orange
  },
  { 
    icon: Bell, 
    title: "Follow-up Set", 
    example: "Reminder in 24h - Nothing dropped",
    color: "#f43f5e" // rose
  },
]

export function WorkflowAnimation() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-card/20 to-black pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap size={16} className="text-primary" />
            <span className="text-sm text-primary">AI Automation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 text-balance">
            Watch the entire workflow{" "}
            <span className="text-primary">happen automatically.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            From first message to booked viewing. Zero manual steps.
          </p>
        </motion.div>

        {/* Desktop Workflow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* SVG Animation Container */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1200 200"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Main connecting path */}
              <path
                d="M 60 100 L 180 100 L 260 100 L 340 100 L 420 100 L 500 100 L 580 100 L 660 100 L 740 100 L 820 100 L 900 100 L 980 100 L 1060 100 L 1140 100"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />
              
              {/* Animated particles */}
              {workflowSteps.map((step, i) => (
                <g key={i}>
                  {/* Glowing orb */}
                  <circle
                    className="workflow-particle"
                    r="10"
                    fill={`url(#grad-${i})`}
                    style={{
                      offsetPath: `path("M 60 100 L 180 100 L 260 100 L 340 100 L 420 100 L 500 100 L 580 100 L 660 100 L 740 100 L 820 100 L 900 100 L 980 100 L 1060 100 L 1140 100")`,
                      animation: `workflow-flow 8s ease-in-out infinite`,
                      animationDelay: `${i * 0.8}s`,
                    }}
                  />
                  {/* Gradient definition */}
                  <defs>
                    <radialGradient id={`grad-${i}`}>
                      <stop offset="0%" stopColor={step.color} />
                      <stop offset="50%" stopColor={step.color} stopOpacity="0.5" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                  </defs>
                </g>
              ))}
            </svg>

            {/* Step Cards */}
            <div className="flex justify-between items-start relative z-10 gap-4">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center w-40 group"
                >
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="relative w-16 h-16 rounded-xl glass-strong border border-border/50 flex items-center justify-center mb-4 group-hover:border-primary/50 transition-all duration-300"
                    style={{ 
                      boxShadow: `0 0 20px ${step.color}10`,
                    }}
                  >
                    <step.icon 
                      size={24} 
                      style={{ color: step.color }}
                    />
                    
                    {/* Pulse effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{ backgroundColor: step.color }}
                      initial={{ opacity: 0, scale: 1 }}
                      whileHover={{ opacity: 0.1, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Step Number */}
                  <span 
                    className="text-[10px] font-mono uppercase tracking-widest mb-1"
                    style={{ color: step.color }}
                  >
                    Step {index + 1}
                  </span>

                  {/* Title */}
                  <h3 className="text-xs font-medium text-foreground mb-2">
                    {step.title}
                  </h3>

                  {/* Example Text */}
                  <p className="text-[10px] text-muted-foreground leading-relaxed italic">
                    {step.example}
                  </p>

                  {/* Connection Line */}
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute top-8 left-full w-full h-0.5 -ml-2 hidden lg:block">
                      <motion.div
                        className="h-full bg-gradient-to-r from-border/50 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Workflow */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border/30">
              <motion.div
                className="w-full bg-gradient-to-b from-cyan-500/60 via-yellow-500/40 to-rose-500/60"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.3 }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-5"
                >
                  {/* Icon */}
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl glass-strong border border-border/50 flex items-center justify-center z-10"
                    style={{ boxShadow: `0 0 15px ${step.color}20` }}
                  >
                    <step.icon size={20} style={{ color: step.color }} />
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <span 
                      className="text-[10px] font-mono uppercase tracking-widest"
                      style={{ color: step.color }}
                    >
                      Step {index + 1}
                    </span>
                    <h3 className="text-sm font-medium text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground italic">
                      {step.example}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-12"
        >
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-light text-primary">{"<"}60s</span>
            <p className="text-xs text-muted-foreground mt-1">Full workflow time</p>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-light text-foreground">24/7</span>
            <p className="text-xs text-muted-foreground mt-1">Always running</p>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-light text-foreground">0</span>
            <p className="text-xs text-muted-foreground mt-1">Manual steps</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
