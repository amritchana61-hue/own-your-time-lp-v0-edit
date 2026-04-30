"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { MessageCircle, Bot } from "lucide-react"
import Image from "next/image"

const chatMessages = [
  {
    type: "user",
    message: "Any 4-bed homes, $400-500k?",
    delay: 0,
  },
  {
    type: "typing",
    delay: 1.5,
  },
  {
    type: "ai",
    message: "Found 3 matches. Budget and timeline confirmed. Agent Sarah gets your details now.",
    delay: 3,
  },
  {
    type: "user",
    message: "Can I view one this weekend?",
    delay: 5.5,
  },
  {
    type: "typing",
    delay: 7,
  },
  {
    type: "ai",
    message: "Saturday 2 PM confirmed. Calendar invite sent.",
    delay: 8.5,
  },
]

const platforms = [
  { 
    name: "WhatsApp", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    color: "#25D366" 
  },
  { 
    name: "Messenger", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg",
    color: "#0084FF" 
  },
  { 
    name: "Instagram", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
    color: "#E4405F" 
  },
  { 
    name: "Website", 
    logo: null,
    color: "#FFFFFF" 
  },
]

export function AIChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [showTyping, setShowTyping] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    const timers: NodeJS.Timeout[] = []

    chatMessages.forEach((msg, index) => {
      if (msg.type === "typing") {
        timers.push(
          setTimeout(() => {
            setShowTyping(true)
          }, msg.delay * 1000)
        )
      } else {
        timers.push(
          setTimeout(() => {
            setShowTyping(false)
            setVisibleMessages((prev) => [...prev, index])
          }, msg.delay * 1000)
        )
      }
    })

    // Reset and loop
    const resetTimer = setTimeout(() => {
      setVisibleMessages([])
      setShowTyping(false)
      setHasStarted(false)
      setTimeout(() => setHasStarted(true), 1000)
    }, 12000)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(resetTimer)
    }
  }, [hasStarted])

  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-black relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <MessageCircle size={16} className="text-cyan-400" />
            <span className="text-sm text-cyan-400">AI Chat Assistant</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-4 text-balance">
            Qualification in{" "}
            <span className="text-cyan-400">seconds.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Serious buyers get fast-tracked. Time-wasters get filtered. Watch it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Chat Interface - Fixed height container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            onViewportEnter={() => setHasStarted(true)}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-strong rounded-2xl border border-border/50 overflow-hidden">
              {/* Chat Header */}
              <div className="px-5 py-4 border-b border-border/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                  <Bot size={20} className="text-black" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">AI Assistant</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-muted-foreground">Online 24/7</span>
                  </div>
                </div>
                <div className="ml-auto">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30"
                  >
                    <span className="text-xs font-mono text-cyan-400">{"<"}10 sec</span>
                  </motion.div>
                </div>
              </div>

              {/* Chat Messages - FIXED HEIGHT to prevent layout shift */}
              <div className="p-5 h-[320px] flex flex-col justify-end bg-black/50">
                <div className="space-y-4 overflow-hidden">
                  <AnimatePresence mode="sync">
                    {chatMessages.map((msg, index) => {
                      if (msg.type === "typing") return null
                      if (!visibleMessages.includes(index)) return null

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                              msg.type === "user"
                                ? "bg-cyan-500/20 border border-cyan-500/30 text-foreground"
                                : "bg-card border border-border/50 text-foreground"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{msg.message}</p>
                          </div>
                        </motion.div>
                      )
                    })}

                    {/* Typing Indicator */}
                    {showTyping && (
                      <motion.div
                        key="typing"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-card border border-border/50 rounded-2xl px-4 py-3">
                          <div className="flex items-center gap-1">
                            {[0, 1, 2].map((i) => (
                              <motion.span
                                key={i}
                                className="w-2 h-2 bg-cyan-400 rounded-full"
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{
                                  duration: 0.8,
                                  repeat: Infinity,
                                  delay: i * 0.15,
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Response time badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2"
            >
              <div className="glass rounded-full px-4 py-2 flex items-center gap-2 border border-cyan-500/30">
                <Bot size={14} className="text-cyan-400" />
                <span className="text-xs text-foreground">Responds in under 10 seconds, 24/7</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Platform logos + description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-light text-foreground mb-4">
                Works everywhere your leads are.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether they message through your website, WhatsApp, Facebook Messenger, or Instagram, the AI responds instantly with the same quality and speed.
              </p>
            </div>

            {/* Platform Pills with Real Logos */}
            <div className="flex flex-wrap gap-3">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-card border border-border/50 hover:border-border transition-colors"
                >
                  {platform.logo ? (
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  ) : (
                    <svg 
                      className="w-5 h-5" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  )}
                  <span className="text-sm text-foreground">{platform.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "Filters serious buyers from browsers",
                "Captures budget, timeline, requirements",
                "Books viewings while you sleep",
                "Hands off qualified leads with context",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
