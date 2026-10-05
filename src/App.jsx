import { motion, useScroll, useSpring } from 'framer-motion'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Work from './components/Work.jsx'
import CoffeeToy from './components/CoffeeToy.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <CoffeeToy />
        <About />
        <Contact />
      </main>
    </>
  )
}
