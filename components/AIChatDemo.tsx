"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { MessageCircle, Zap } from "lucide-react"

const chatMessages = [
  {
    type: "user",
    message: "Hi, is the property on Oak Street still available?",
    delay: 0,
  },
  {
    type: "typing",
    delay: 1.5,
  },
  {
    type: "ai",
    message: "Yes! The 4-bed home on Oak Street is available at $450,000. It has been getting a lot of interest. Would you like me to capture your details for a priority viewing?",
    delay: 3,
  },
  {
    type: "user",
    message: "Yes, I am free this weekend. Saturday afternoon works best.",
    delay: 6,
  },
  {
    type: "typing",
    delay: 7.5,
  },
  {
    type: "ai",
    message: "Perfect! I have scheduled a viewing for Saturday at 2:00 PM. You will receive a calendar invite and confirmation shortly. Is there anything specific you would like to know about the property before then?",
    delay: 9,
  },
]

const platformLogos = [
  { name: "WhatsApp", color: "#25D366" },
  { name: "Messenger", color: "#0084FF" },
  { name: "Instagram", color: "#E4405F" },
  { name: "Website", color: "#FFFFFF" },
]

export function AIChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [showTyping, setShowTyping] = useState(false)
  const [currentTypingIndex, setCurrentTypingIndex] = useState(-1)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    const timers: NodeJS.Timeout[] = []

    chatMessages.forEach((msg, index) => {
      if (msg.type === "typing") {
        timers.push(
          setTimeout(() => {
            setShowTyping(true)
            setCurrentTypingIndex(index)
          }, msg.delay * 1000)
        )
      } else {
        timers.push(
          setTimeout(() => {
            setShowTyping(false)
            setCurrentTypingIndex(-1)
            setVisibleMessages((prev) => [...prev, index])
          }, msg.delay * 1000)
        )
      }
    })

    // Reset and loop
    const resetTimer = setTimeout(() => {
      setVisibleMessages([])
      setShowTyping(false)
      setCurrentTypingIndex(-1)
      setHasStarted(false)
      setTimeout(() => setHasStarted(true), 1000)
    }, 14000)

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
            See how leads get handled{" "}
            <span className="text-cyan-400">instantly.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            A buyer asks a question. The AI responds in seconds. Watch it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Chat Interface */}
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
                  <Zap size={18} className="text-black" />
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

              {/* Chat Messages */}
              <div className="p-5 min-h-[380px] space-y-4 bg-black/50">
                <AnimatePresence mode="popLayout">
                  {chatMessages.map((msg, index) => {
                    if (msg.type === "typing") return null
                    if (!visibleMessages.includes(index)) return null

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10 }}
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
                      exit={{ opacity: 0, y: -10 }}
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

            {/* Response time badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2"
            >
              <div className="glass rounded-full px-4 py-2 flex items-center gap-2 border border-cyan-500/30">
                <Zap size={14} className="text-cyan-400" />
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

            {/* Platform Pills */}
            <div className="flex flex-wrap gap-3">
              {platformLogos.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border/50 hover:border-border transition-colors"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: platform.color }}
                  />
                  <span className="text-sm text-foreground">{platform.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "Answers common questions instantly",
                "Captures budget, location, timeline",
                "Books viewings while you sleep",
                "Hands off qualified leads with full context",
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
