"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function SpecialistSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Specialist Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-8"
          >
            {/* Placeholder image container */}
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-border/50 relative">
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-card to-black" />
              
              {/* Placeholder avatar silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-muted-foreground/30"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10" />
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <h3 className="text-2xl sm:text-3xl font-light text-foreground mb-2">
              Your Name
            </h3>
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              AI Automation Specialist for Real Estate
            </p>
          </motion.div>

          {/* Bio with Manager-Focused Credibility */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl mx-auto mb-8"
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              Helping real estate teams save 10+ hours every week with AI automation and chat assistants. 
              Every system is built specifically for how your agency operates.
            </p>
            
            {/* Credibility Points */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1.5 rounded-full bg-card border border-border/50 text-muted-foreground">
                50+ agencies helped
              </span>
              <span className="px-3 py-1.5 rounded-full bg-card border border-border/50 text-muted-foreground">
                Built for teams of 2-10
              </span>
              <span className="px-3 py-1.5 rounded-full bg-card border border-border/50 text-muted-foreground">
                Lead response specialist
              </span>
            </div>
          </motion.div>

          {/* Social Links with Real Logos */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            {/* LinkedIn */}
            <a
              href="#"
              className="w-11 h-11 rounded-full glass-strong border border-border/50 flex items-center justify-center hover:border-[#0A66C2]/50 transition-all duration-300 group"
            >
              <svg 
                className="w-5 h-5 text-muted-foreground group-hover:text-[#0A66C2] transition-colors" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* Twitter/X */}
            <a
              href="#"
              className="w-11 h-11 rounded-full glass-strong border border-border/50 flex items-center justify-center hover:border-foreground/50 transition-all duration-300 group"
            >
              <svg 
                className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
