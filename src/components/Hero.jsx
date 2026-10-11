import { useLayoutEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Giant name letters that rise into place one by one.
function RisingWord({ text, delay = 0 }) {
  return (
    <span className="rising" aria-label={text}>
      {[...text].map((ch, i) => (
        <span className="rising-clip" key={i} aria-hidden="true">
          <motion.span
            className="rising-letter"
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 20, delay: delay + i * 0.05 }}
            whileHover={{ y: '-8%', transition: { type: 'spring', stiffness: 500, damping: 12 } }}
          >
            {ch}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const seamRef = useRef(null)

  // Publish where the blue and black blocks meet, so the phone layout can center the sticker on that line.
  useLayoutEffect(() => {
    const section = ref.current
    const blockB = seamRef.current
    if (!section || !blockB) return
    const update = () => section.style.setProperty('--seam', `${blockB.offsetTop}px`)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(section)
    return () => ro.disconnect()
  }, [])
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // The two name blocks drift apart as you scroll past.
  const xTop = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const xBottom = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <>
      <section id="top" className="hero" ref={ref}>
        <div className="hero-block hero-block-a">
          <motion.h1 style={{ x: xTop }}>
            <RisingWord text="Rachel" delay={0.1} />
            <span className="sr-only"> Regnell</span>
          </motion.h1>
        </div>
        <div className="hero-block hero-block-b" ref={seamRef}>
          <motion.div className="hero-word" style={{ x: xBottom }} aria-hidden="true">
            <RisingWord text="Regnell" delay={0.35} />
          </motion.div>
        </div>

        <motion.div
          className="hero-sticker"
          drag
          dragSnapToOrigin
          dragElastic={0.6}
          initial={{ scale: 0, rotate: -60 }}
          animate={{ scale: 1, rotate: -9 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.9 }}
          whileHover={{ rotate: 6, scale: 1.06 }}
          whileDrag={{ scale: 1.15, cursor: 'grabbing' }}
          data-cursor
        >
          <span>Open to CX + GTM roles</span>
        </motion.div>
      </section>

      <section className="intro">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          15 years creating optimal customer experiences.
        </motion.p>
        <motion.a href="#work" className="btn btn-ink" whileHover={{ scale: 1.06, rotate: -2 }} whileTap={{ scale: 0.95 }}>
          See the work
        </motion.a>
      </section>
    </>
  )
}
