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
      <HowItWorks />
      <LaptopProducts />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
