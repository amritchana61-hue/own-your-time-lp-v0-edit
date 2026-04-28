"use client"

import { motion } from "framer-motion"
import { MessageSquare, Clock, Hourglass, Search, Ban } from "lucide-react"

const leakSteps = [
  {
    label: "Website enquiry",
    text: '"Is this still available?"',
    timestamp: "9:42 PM",
    icon: MessageSquare,
    details: "Enquiry arrives while the office is closed.",
  },
  {
    label: "Agent unavailable",
    text: "In a viewing. On a call. Driving.",
    timestamp: "10:15 PM",
    icon: Clock,
    details: "The real daily situation of a busy agent.",
  },
  {
    label: "No instant reply",
    text: "The message sits overnight.",
    timestamp: "1:30 AM",
    icon: Hourglass,
    details: "The silent gap where the buyer starts to drift.",
  },
  {
    label: "Buyer moves on",
    text: "They contact another agency.",
    timestamp: "8:05 AM",
    icon: Search,
    details: "They wake up and look for faster answers.",
  },
  {
    label: "Viewing never booked",
    text: "No conversation. No commission.",
    timestamp: "9:00 AM",
    icon: Ban,
    details: "The deal disappears before it even started.",
  },
]

export function DailyLeak() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-black">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Where enquiries quietly disappear
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-neutral-400 leading-relaxed font-light"
          >
            A buyer asks a simple question. Your agent is in a viewing. By morning, they have already messaged someone else.
          </motion.p>
        </div>

        {/* Horizontal Flow Cards */}
        <div className="relative">
          {/* Subtle Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {leakSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group ${index === 4 ? 'opacity-60 grayscale' : ''}`}
              >
                <div className="h-full p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm hover:border-neutral-700 transition-colors duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-2 rounded-lg bg-neutral-800 text-neutral-400 group-hover:text-white transition-colors">
                      <step.icon size={20} />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest pt-1">
                      {step.timestamp}
                    </span>
                  </div>
                  
                  <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                    {step.label}
                  </h3>
                  <p className="text-lg text-white font-medium mb-3 leading-tight">
                    {step.text}
                  </p>
                  <p className="text-xs text-neutral-500 leading-relaxed italic">
                    {step.details}
                  </p>
                </div>
                
                {/* Arrow Connector (Desktop) */}
                {index < 4 && (
                  <div className="absolute top-1/2 -right-2 hidden lg:block -translate-y-1/2 z-20">
                    <div className="w-4 h-4 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-neutral-600" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-neutral-500 text-sm sm:text-base font-light italic">
            "Most lost buyers do not make noise. They just message someone else."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
