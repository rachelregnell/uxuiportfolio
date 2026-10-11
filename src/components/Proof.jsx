import { useEffect, useRef } from 'react'
import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion'

export default function Proof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const count = useMotionValue(0)
  const text = useTransform(count, (v) => Math.round(v).toString())

  useEffect(() => {
    if (!inView) return
    const controls = animate(count, 18, { duration: 1.6, ease: [0.2, 0.8, 0.2, 1] })
    return () => controls.stop()
  }, [inView, count])

  return (
    <section className="proof" ref={ref}>
      <motion.div className="proof-num" aria-label="18">
        <motion.span aria-hidden="true">{text}</motion.span>
      </motion.div>
      <motion.div
        className="proof-copy"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="proof-title">New TripAdvisor reviews in two weeks</div>
        <p>Plus a 5-star rating shift. The QR feedback loop gave guests a fast way to surface issues before they became reviews.</p>
      </motion.div>
    </section>
  )
}
