import Hero from "@/components/hero"
import Features from "@/components/Features"
import Testimonials from "@/components/Testimonials"
import CallToAction from "@/components/CallToAction"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

