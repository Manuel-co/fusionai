import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ProductCategoriesSection } from "@/components/product-categories-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { CursorTrail } from "@/components/cursor-trail"
import { FloatingActionButton } from "@/components/floating-action-button"
import { ActivityNotification } from "@/components/activity-notification"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />
      <CursorTrail />
      <ActivityNotification />
      <FloatingActionButton />

      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ProductCategoriesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
