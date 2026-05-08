import { Hero } from '@/components/ui/animated-hero'

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent-secondary/10 rounded-full blur-[100px]" />
      <div className="relative z-10 w-full">
        <Hero />
      </div>
    </section>
  )
}
