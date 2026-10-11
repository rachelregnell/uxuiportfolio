import { useCallback, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { projects } from './content.js'
import Cursor from './components/Cursor.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Band from './components/Band.jsx'
import StoryPicker from './components/StoryPicker.jsx'
import StoryPanels from './components/StoryPanels.jsx'
import Proof from './components/Proof.jsx'
import Gtm from './components/Gtm.jsx'
import NextProject from './components/NextProject.jsx'
import Contact from './components/Contact.jsx'
import Lightbox from './components/Lightbox.jsx'

const firstStep = (i) => projects[i].defaultStep ?? 0

export default function App() {
  const [p, setP] = useState(0)
  const [s, setS] = useState(firstStep(0))
  const [zoom, setZoom] = useState(null)

  const pickProject = useCallback((i) => {
    setP(i)
    setS(firstStep(i))
  }, [])

  const closeZoom = useCallback(() => setZoom(null), [])

  const nextProject = () => {
    pickProject((p + 1) % projects.length)
    setTimeout(() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
  }

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Band />
        <StoryPicker p={p} s={s} onPick={pickProject} onStep={setS} onZoom={setZoom} />
        <StoryPanels project={projects[p]} />
        <Proof />
        <Gtm />
        <NextProject project={projects[(p + 1) % projects.length]} onClick={nextProject} />
      </main>
      <Contact />
      <Lightbox image={zoom} onClose={closeZoom} />
    </>
  )
}
