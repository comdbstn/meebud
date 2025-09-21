import Hero from '@/components/Hero'
import WhyMeebud from '@/components/WhyMeebud'
import HowItWorks from '@/components/HowItWorks'
import TrustSafety from '@/components/TrustSafety'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhyMeebud />
      <HowItWorks />
      <TrustSafety />
      <FAQ />
      <Footer />
    </main>
  )
}