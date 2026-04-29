"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Play } from "lucide-react"
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

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8"
          >
            Helping real estate teams save 10+ hours every week with AI automation and chat assistants. 
            Every system is built specifically for how your agency operates.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <a
              href="#"
              className="w-10 h-10 rounded-full glass-strong border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full glass-strong border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <Twitter size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="text-center mb-6">
            <h4 className="text-lg sm:text-xl font-light text-foreground mb-2">
              A message for real estate teams
            </h4>
            <p className="text-sm text-muted-foreground">
              2 minutes on the problems you face and how we solve them.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-strong border border-border/50 group">
            {/* Placeholder Video Background */}
            <div className="absolute inset-0 bg-black overflow-hidden">
              {/* Animated particle background */}
              <div className="absolute inset-0">
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0.1, 0.6, 0.1],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                    }}
                  />
                ))}
              </div>

              {/* Subtle grid pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Center glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-48 h-48 rounded-full bg-primary/5 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300"
              >
                <Play size={32} className="text-white ml-1" fill="white" />
              </motion.button>
            </div>

            {/* Video placeholder label */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <div className="glass rounded-lg px-4 py-2 inline-block">
                <span className="text-xs text-muted-foreground">
                  Video coming soon
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
