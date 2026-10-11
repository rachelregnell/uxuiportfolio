import { motion } from 'framer-motion'
import { process } from '../content.js'

export default function Band() {
  const row = [...process, ...process]
  return (
    <div className="band" aria-label={`My process: ${process.join(', ')}`}>
      <motion.div
        className="band-track"
        aria-hidden="true"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {row.map((step, i) => (
          <span key={i}>
            {step} <span className="band-arrow">→</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
