"use client"

import { motion } from "framer-motion"
import { X, Check, Clock, AlertCircle, Zap } from "lucide-react"

export function BeforeAfterComparison() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-red-500/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-500/5 to-transparent" />
      </div>

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
            The difference is{" "}
            <span className="text-cyan-400">visible.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Your daily reality: scattered messages vs. unified control.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT SIDE - Without AI (Pain) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-strong rounded-2xl border border-red-500/20 p-6 sm:p-8 h-full">
              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X size={16} className="text-red-400" />
                </div>
                <span className="text-sm font-medium text-red-400 uppercase tracking-wider">Without AI</span>
              </div>

              {/* Vector Illustration - Frustrated Manager */}
              <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-red-950/30 to-black mb-6 overflow-hidden">
                {/* Placeholder for vector - frustrated manager */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 150" className="w-full h-full p-6">
                    {/* Desk */}
                    <rect x="30" y="100" width="140" height="8" fill="rgba(255,255,255,0.1)" rx="2" />
                    
                    {/* Person silhouette - stressed pose */}
                    <g fill="rgba(255,100,100,0.3)">
                      {/* Head */}
                      <circle cx="100" cy="45" r="18" />
                      {/* Body */}
                      <ellipse cx="100" cy="80" rx="25" ry="20" />
                      {/* Arms raised in frustration */}
                      <rect x="60" y="55" width="20" height="8" rx="4" transform="rotate(-30 70 59)" />
                      <rect x="120" y="55" width="20" height="8" rx="4" transform="rotate(30 130 59)" />
                    </g>
                    
                    {/* Scattered message icons */}
                    <g fill="rgba(255,100,100,0.5)">
                      <rect x="25" y="30" width="20" height="14" rx="3" />
                      <rect x="155" y="25" width="20" height="14" rx="3" />
                      <rect x="40" y="70" width="16" height="12" rx="2" />
                      <rect x="145" y="65" width="16" height="12" rx="2" />
                      <rect x="20" y="85" width="18" height="13" rx="3" />
                      <rect x="165" y="80" width="18" height="13" rx="3" />
                    </g>
                    
                    {/* Question marks / confusion indicators */}
                    <text x="50" y="50" fill="rgba(255,100,100,0.4)" fontSize="12">?</text>
                    <text x="150" y="45" fill="rgba(255,100,100,0.4)" fontSize="12">?</text>
                    <text x="30" y="95" fill="rgba(255,100,100,0.4)" fontSize="10">!</text>
                  </svg>
                </div>
                
                {/* Overlay text */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="glass rounded-lg px-3 py-2 inline-block">
                    <span className="text-xs text-red-300">Messages scattered everywhere</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-red-400" />
                  <span className="text-xs text-muted-foreground">Response timeline</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>9 PM</span>
                  <div className="flex-1 h-1.5 bg-red-500/20 rounded-full relative overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 bg-red-500/50 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 3, delay: 0.5 }}
                    />
                  </div>
                  <span>9 AM</span>
                </div>
                <p className="text-red-400 text-lg font-light mt-2">8-24 hours response</p>
              </div>

              {/* Pain Points */}
              <div className="space-y-3">
                {[
                  "WhatsApp, email, website - all disconnected",
                  "No idea who followed up yesterday",
                  "Leads slip through during viewings",
                  "Commission disputes from unclear handoffs",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <AlertCircle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* Result Badge */}
              <div className="mt-6 pt-6 border-t border-red-500/20">
                <div className="flex items-center gap-2">
                  <X size={16} className="text-red-400" />
                  <span className="text-sm text-red-400 font-medium">Lead lost to competitor</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - With AI (Solution) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-strong rounded-2xl border border-green-500/20 p-6 sm:p-8 h-full">
              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check size={16} className="text-green-400" />
                </div>
                <span className="text-sm font-medium text-green-400 uppercase tracking-wider">With AI</span>
              </div>

              {/* Vector Illustration - Calm Manager */}
              <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-green-950/30 to-black mb-6 overflow-hidden">
                {/* Placeholder for vector - calm manager with dashboard */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 150" className="w-full h-full p-6">
                    {/* Desk */}
                    <rect x="30" y="100" width="140" height="8" fill="rgba(255,255,255,0.1)" rx="2" />
                    
                    {/* Person silhouette - relaxed pose */}
                    <g fill="rgba(100,255,150,0.3)">
                      {/* Head */}
                      <circle cx="70" cy="50" r="16" />
                      {/* Body */}
                      <ellipse cx="70" cy="82" rx="22" ry="18" />
                      {/* Arms relaxed */}
                      <rect x="45" y="75" width="18" height="7" rx="3" />
                      <rect x="85" y="75" width="18" height="7" rx="3" />
                    </g>
                    
                    {/* Unified Dashboard */}
                    <g>
                      <rect x="110" y="30" width="70" height="55" rx="4" fill="rgba(100,255,150,0.1)" stroke="rgba(100,255,150,0.3)" strokeWidth="1" />
                      {/* Dashboard content */}
                      <rect x="116" y="38" width="25" height="6" rx="1" fill="rgba(100,255,150,0.2)" />
                      <rect x="116" y="48" width="58" height="4" rx="1" fill="rgba(100,255,150,0.15)" />
                      <rect x="116" y="56" width="40" height="4" rx="1" fill="rgba(100,255,150,0.15)" />
                      <rect x="116" y="64" width="50" height="4" rx="1" fill="rgba(100,255,150,0.15)" />
                      <rect x="116" y="72" width="30" height="4" rx="1" fill="rgba(100,255,150,0.15)" />
                      {/* Status indicators */}
                      <circle cx="170" cy="41" r="3" fill="rgba(100,255,150,0.5)" />
                    </g>
                    
                    {/* Messages flowing into dashboard */}
                    <g fill="rgba(100,255,150,0.4)">
                      <rect x="95" y="35" width="12" height="8" rx="2" />
                      <rect x="95" y="55" width="12" height="8" rx="2" />
                      <rect x="95" y="75" width="12" height="8" rx="2" />
                    </g>
                    
                    {/* Arrows pointing to dashboard */}
                    <path d="M105 39 L110 39" stroke="rgba(100,255,150,0.3)" strokeWidth="1" />
                    <path d="M105 59 L110 59" stroke="rgba(100,255,150,0.3)" strokeWidth="1" />
                    <path d="M105 79 L110 79" stroke="rgba(100,255,150,0.3)" strokeWidth="1" />
                    
                    {/* Checkmarks */}
                    <text x="155" y="52" fill="rgba(100,255,150,0.5)" fontSize="8">&#10003;</text>
                    <text x="155" y="60" fill="rgba(100,255,150,0.5)" fontSize="8">&#10003;</text>
                    <text x="155" y="68" fill="rgba(100,255,150,0.5)" fontSize="8">&#10003;</text>
                  </svg>
                </div>
                
                {/* Overlay text */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="glass rounded-lg px-3 py-2 inline-block">
                    <span className="text-xs text-green-300">Everything in one dashboard</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={14} className="text-green-400" />
                  <span className="text-xs text-muted-foreground">Response timeline</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>9:00 PM</span>
                  <div className="flex-1 h-1.5 bg-green-500/20 rounded-full relative overflow-hidden">
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 bg-green-500/50 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "8%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                  </div>
                  <span>9:01 PM</span>
                </div>
                <p className="text-green-400 text-lg font-light mt-2">Under 60 seconds</p>
              </div>

              {/* Solution Points */}
              <div className="space-y-3">
                {[
                  "All messages flow into one system",
                  "Full visibility on every lead status",
                  "Instant response while you sleep",
                  "Clear attribution, no disputes",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* Result Badge */}
              <div className="mt-6 pt-6 border-t border-green-500/20">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-400" />
                  <span className="text-sm text-green-400 font-medium">Deal closed in 3 days</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom stat callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block glass rounded-xl px-6 py-4 border border-cyan-500/20">
            <p className="text-sm text-muted-foreground">
              Response within 1 hour ={" "}
              <span className="text-cyan-400 font-medium">7x more likely to qualify lead</span>
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1">Harvard Business Review</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
