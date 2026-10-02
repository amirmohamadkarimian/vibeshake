import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import ComboBanner from './components/ComboBanner'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MenuSection />
      <ComboBanner />
      <WhyUs />
      <Testimonials />
      <Footer />
    </div>
  )
}
