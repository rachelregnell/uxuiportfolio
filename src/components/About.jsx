import { useRef } from 'react'
import { motion } from 'framer-motion'
import { goals, profile } from '../content.js'

const noteColors = ['var(--yellow)', 'var(--pink)', 'var(--teal)', 'var(--purple-soft)', 'var(--orange)']
const tilts = [-4, 3, -2, 5, -3]

export default function About() {
  const board = useRef(null)

  return (
    <section id="about" className="section about">
      <motion.div
        className="about-copy"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow"><span className="dot" /> About me</p>
        <h2>From front-of-house to front-end experiences.</h2>
        <p>{profile.intro}</p>
        <p>
          Hospitality and operations taught me what happens when a process is confusing: a real
          person gets frustrated, right in front of you. I bring that same instinct to UX. I look
          for the friction, explain things plainly, and make the next step obvious.
        </p>
        <p>
          Right now I'm deep in UX/UI coursework and portfolio projects, and I'm looking for my
          first product design role.
        </p>
      </motion.div>

      <div className="board" ref={board}>
        <p className="board-label">My goals (go ahead, rearrange them)</p>
        {goals.map((g, i) => (
          <motion.div
            key={g}
            className="note"
            style={{ background: noteColors[i % noteColors.length] }}
            drag
            dragConstraints={board}
            dragElastic={0.2}
            initial={{ opacity: 0, scale: 0.6, rotate: tilts[i] * 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: tilts[i] }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 14, delay: i * 0.08 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 3 }}
            whileDrag={{ scale: 1.1, rotate: tilts[i] * -1, zIndex: 4, boxShadow: '10px 14px 0 var(--ink)' }}
            data-cursor
          >
            <span className="note-num">0{i + 1}</span>
            {g}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
