import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import VisionSection from '@/components/VisionSection'
import PlatformOverview from '@/components/PlatformOverview'
import PillarsSection from '@/components/PillarsSection'
import ProductSupra from '@/components/ProductSupra'
import ProductHydra from '@/components/ProductHydra'
import ProductMaria from '@/components/ProductMaria'
import ProductAgora from '@/components/ProductAgora'
import ImpactSection from '@/components/ImpactSection'
import CTASection from '@/components/CTASection'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <main>
        <HeroSection />
        <VisionSection />
        <PlatformOverview />
        <PillarsSection />
        <div id="productos" className="scroll-mt-20">
          <ProductMaria />
          <ProductAgora />
          <ProductSupra />
          <ProductHydra />
        </div>
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
