"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

function AnimatedStat({
  numericEnd,
  suffix = "",
  staticDisplay,
  label,
}: {
  numericEnd?: number
  suffix?: string
  staticDisplay?: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView || numericEnd === undefined) return
    let frame = 0
    const totalFrames = 60
    const timer = setInterval(() => {
      frame++
      setCount(Math.round((numericEnd * frame) / totalFrames))
      if (frame >= totalFrames) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [isInView, numericEnd])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-5xl sm:text-6xl font-light text-foreground mb-2">
        {staticDisplay ?? `${count}${suffix}`}
      </div>
      <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">{label}</p>
    </motion.div>
  )
}

export function RealCost() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground mb-6 leading-tight">
              Slow isn&apos;t neutral.
              <br />
              <span className="text-primary">It&apos;s expensive.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every hour a lead waits is an hour they&apos;re talking to someone else. Buyers who don&apos;t hear back move on. Agents who don&apos;t follow up lose commission. The agency absorbs the cost without ever seeing it on a spreadsheet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-strong rounded-2xl p-8 sm:p-10 space-y-8"
          >
            <AnimatedStat
              numericEnd={78}
              suffix="%"
              label="of buyers go with the first agent who responds"
            />
            <div className="border-t border-border/30" />
            <AnimatedStat
              numericEnd={4}
              suffix="+"
              label="hours — average response time without automation"
            />
            <div className="border-t border-border/30" />
            <AnimatedStat
              staticDisplay="1 in 3"
              label="leads never gets a follow-up"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
