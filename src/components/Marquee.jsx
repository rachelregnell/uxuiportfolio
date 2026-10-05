import { motion } from 'framer-motion'
import { skills } from '../content.js'

export default function Marquee() {
  const row = [...skills, ...skills]
  return (
    <div className="marquee" aria-label={`Skills: ${skills.join(', ')}`}>
      <motion.div
        className="marquee-track"
        aria-hidden="true"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {row.map((s, i) => (
          <span key={i}>
            {s} <span className="marquee-star">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
