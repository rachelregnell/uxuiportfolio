import { useRef, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { education, experience } from '../content.js'

function Role({ job, index, open, onToggle }) {
  const id = `role-${index}`
  return (
    <motion.li
      className="role"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 140, damping: 18 }}
    >
      <motion.span
        className="role-dot"
        style={{ background: job.color }}
        animate={{ scale: open ? 1.35 : 1 }}
        aria-hidden="true"
      />
      <button
        type="button"
        className="role-card"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        style={{ '--accent': job.color }}
      >
        <span className="role-dates">{job.dates}</span>
        <span className="role-title">{job.role}</span>
        <span className="role-org">
          {job.org}
          {job.place && <span className="role-place"> · {job.place}</span>}
        </span>
        <motion.span className="role-toggle" animate={{ rotate: open ? 45 : 0 }} aria-hidden="true">
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            id={id}
            className="role-points"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          >
            {job.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default function Experience() {
  const [open, setOpen] = useState(0)
  const listRef = useRef(null)
  // The timeline line draws itself as you scroll through the section.
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 80%', 'end 60%'] })
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  return (
    <section id="experience" className="experience">
      <div className="experience-head">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          The path here
        </motion.h2>
        <span className="scribble">tap a role for the details</span>
      </div>

      <div className="experience-body">
        <div className="timeline" ref={listRef}>
          <div className="timeline-track" aria-hidden="true">
            <motion.div className="timeline-fill" style={{ scaleY: line }} />
          </div>
          <ol className="roles">
            {experience.map((job, i) => (
              <Role key={job.role + job.dates} job={job} index={i} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            ))}
          </ol>
        </div>

        <motion.aside
          className="edu"
          initial={{ opacity: 0, y: 40, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: 1.5 }}
          whileHover={{ rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 140, damping: 16 }}
        >
          <div className="edu-label">Education</div>
          <div className="edu-degree">{education.degree}</div>
          <div className="edu-school">
            {education.school} · {education.when}
          </div>
          <div className="edu-label edu-label-certs">Certifications</div>
          <ul className="edu-certs">
            {education.certs.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </section>
  )
}
