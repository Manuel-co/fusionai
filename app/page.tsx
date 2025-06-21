import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WhyBuyersSection } from "@/components/why-buyers-section"
import { VisualSection } from "@/components/visual-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhyBuyersSection />
      <VisualSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}
