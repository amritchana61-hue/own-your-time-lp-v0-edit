"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Will this replace our agents?",
    answer: "No. It handles the repetitive first layer. Agents still handle trust, negotiation, and closing.",
  },
  {
    question: "Can this work with our current process?",
    answer: "Yes. The first version sits beside your current workflow without changing everything.",
  },
  {
    question: "Does this work outside the website — WhatsApp, Messenger, Instagram?",
    answer: "Yes. Channel integrations can be added once the core workflow is clear.",
  },
  {
    question: "Is this hard to set up?",
    answer: "No. We handle the build. You describe the workflow, we configure it, and you review before it goes live.",
  },
  {
    question: "What happens on the free audit?",
    answer: "We review how your leads arrive, where time is wasted, and identify the first 3 automation opportunities worth building.",
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on workflow size, channels, and maintenance. The audit defines the first useful build and gives you a clear number.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-foreground">
            Questions we hear{" "}
            <span className="text-primary">before every audit.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-strong rounded-xl px-5 sm:px-6 border-border/50 data-[state=open]:border-primary/50 hover:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-4 sm:py-5">
                  <span className="text-foreground font-medium text-left text-sm sm:text-base">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
