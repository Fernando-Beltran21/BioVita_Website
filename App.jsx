import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import ProcessScroll from './components/ProcessScroll'
import BenefitsBento from './components/BenefitsBento'
import FlavorBurst from './components/FlavorBurst'
import Nutrition from './components/Nutrition'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ProcessScroll />
        <BenefitsBento />
        <FlavorBurst />
        <Nutrition />
      </main>
      <Footer />
    </>
  )
}
