import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { LaptopProducts } from './components/Products'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LaptopProducts />
      <HowItWorks />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
