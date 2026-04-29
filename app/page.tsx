import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { VideoSection } from "@/components/VideoSection"
import { DailyLeak } from "@/components/DailyLeak"
import { AIChatDemo } from "@/components/AIChatDemo"
import { RealCost } from "@/components/RealCost"
import { WorkflowAnimation } from "@/components/WorkflowAnimation"
import { WorkflowPipeline } from "@/components/WorkflowPipeline"
import { ProductPaths } from "@/components/ProductPaths"
import { SpecialistSection } from "@/components/SpecialistSection"
import { FAQSection } from "@/components/FAQSection"
import { FinalCTA } from "@/components/FinalCTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <DailyLeak />
      <AIChatDemo />
      <RealCost />
      <WorkflowAnimation />
      <WorkflowPipeline />
      <ProductPaths />
      <SpecialistSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
