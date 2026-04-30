import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { VideoSection } from "@/components/VideoSection"
import { AIChatDemo } from "@/components/AIChatDemo"
import { BeforeAfterComparison } from "@/components/BeforeAfterComparison"
import { RoadblocksWeSolve } from "@/components/RoadblocksWeSolve"
import { SpecialistSection } from "@/components/SpecialistSection"
import { SpecialistVideoSection } from "@/components/SpecialistVideoSection"
import { FAQSection } from "@/components/FAQSection"
import { FinalCTA } from "@/components/FinalCTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <AIChatDemo />
      <BeforeAfterComparison />
      <RoadblocksWeSolve />
      <SpecialistSection />
      <SpecialistVideoSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
