import { motion } from 'framer-motion'
import { gtmConcepts } from '../content.js'

export default function Gtm() {
  return (
    <section id="gtm" className="gtm">
      <div className="gtm-head">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          Built for a GTM team
        </motion.h2>
        <span className="scribble">three ways I think about customers</span>
      </div>
      <div className="gtm-cards">
        {gtmConcepts.map((c, i) => (
          <motion.article
            key={c.num}
            className="gtm-card"
            initial={{ opacity: 0, y: 60, rotate: i % 2 ? 4 : -4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 140, damping: 16, delay: i * 0.1 }}
            whileHover={{ y: -10, rotate: i % 2 ? 1.5 : -1.5 }}
          >
            <div className="gtm-card-bar" style={{ background: c.color }} />
            <div className="gtm-card-body">
              <div className="gtm-card-num">CONCEPT {c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
