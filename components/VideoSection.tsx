"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-3">
            Watch how it works
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            A quick walkthrough of the problem and how we solve it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden glass-strong border border-border/50 group"
        >
          {/* Placeholder Video Background - Animated Stars/Particles */}
          <div className="absolute inset-0 bg-black overflow-hidden">
            {/* Animated star field */}
            <div className="absolute inset-0">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Flowing lines animation */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
              <defs>
                <linearGradient id="video-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="white" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              {[...Array(5)].map((_, i) => (
                <motion.line
                  key={i}
                  x1="0"
                  y1={`${20 + i * 15}%`}
                  x2="100%"
                  y2={`${20 + i * 15}%`}
                  stroke="url(#video-line-gradient)"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: [0, 1, 0],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </svg>

            {/* Center glow effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-32 h-32 rounded-full bg-white/5 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
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

          {/* Video placeholder text */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="glass rounded-lg px-4 py-2 inline-block">
              <span className="text-xs text-muted-foreground">
                Video coming soon - Your personal walkthrough
              </span>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-6"
        >
          2 minutes to understand what takes most agencies weeks to figure out.
        </motion.p>
      </div>
    </section>
  )
}
