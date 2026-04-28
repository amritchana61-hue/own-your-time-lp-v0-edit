import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { DailyLeak } from "@/components/DailyLeak"
import { RealCost } from "@/components/RealCost"
import { DreamState } from "@/components/DreamState"
import { WorkflowPipeline } from "@/components/WorkflowPipeline"
import { AuditSection } from "@/components/AuditSection"
import { ProductPaths } from "@/components/ProductPaths"
import { FAQSection } from "@/components/FAQSection"
import { FinalCTA } from "@/components/FinalCTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DailyLeak />
      <RealCost />
      <DreamState />
      <WorkflowPipeline />
      <AuditSection />
      <ProductPaths />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
