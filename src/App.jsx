import { useRef } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ImpactAndTestimonials from './components/ImpactAndTestimonials'
import SiteFooter from './components/SiteFooter'

function App() {
  const howRef = useRef(null)

  const handleScrollToHow = () => {
    if (howRef.current) {
      howRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero onScrollToHow={handleScrollToHow} />

      {/* Anchor for smooth scroll target */}
      <div ref={howRef} />
      <HowItWorks />
      <ImpactAndTestimonials />
      <SiteFooter />
    </div>
  )
}

export default App
