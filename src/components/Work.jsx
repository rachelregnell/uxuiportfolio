import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { projects } from '../content.js'

// Card tilts toward the pointer in 3D.
function TiltCard({ project, index, onOpen }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 18 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 200, damping: 18 })

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.li
      className={`card card-${index}`}
      initial={{ opacity: 0, y: 60, rotate: index % 2 ? 3 : -3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 16, delay: (index % 2) * 0.1 }}
      style={{ perspective: 900 }}
    >
      <motion.button
        type="button"
        className="card-inner"
        style={{ rotateX, rotateY, '--card-color': project.color }}
        onPointerMove={handleMove}
        onPointerLeave={reset}
        onClick={() => onOpen(project.id)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={`Open ${project.title} case study`}
      >
        <motion.div className="card-media" layoutId={`media-${project.id}`}>
          <img src={project.image} alt="" loading="lazy" />
        </motion.div>
        <div className="card-body">
          <span className="chip">{project.platform}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <span className="card-more">Peek inside →</span>
        </div>
      </motion.button>
    </motion.li>
  )
}

function ProjectModal({ project, onClose, onNext }) {
  const closeRef = useRef(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext])

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        style={{ '--card-color': project.color }}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      >
        <motion.div className="modal-media" layoutId={`media-${project.id}`}>
          <img src={project.image} alt={`${project.title} screen design`} />
        </motion.div>
        <div className="modal-body">
          <div className="modal-tags">
            <span className="chip">{project.platform}</span>
            {project.tags.map((t) => (
              <span className="chip chip-soft" key={t}>{t}</span>
            ))}
          </div>
          <h3 id="modal-title">{project.title}</h3>
          <p className="modal-summary">{project.summary}</p>
          <h4>Design moves I'm proud of</h4>
          <ul className="highlights">
            {project.highlights.map((h, i) => (
              <motion.li
                key={h}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + i * 0.08 }}
              >
                {h}
              </motion.li>
            ))}
          </ul>
          <div className="modal-actions">
            <motion.button type="button" className="btn btn-primary" onClick={onNext} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Next project →
            </motion.button>
          </div>
        </div>
        <motion.button
          ref={closeRef}
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
          whileHover={{ rotate: 90, scale: 1.1 }}
        >
          ✕
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default function Work() {
  const [openId, setOpenId] = useState(null)
  const openIndex = projects.findIndex((p) => p.id === openId)
  const open = projects[openIndex]

  return (
    <section id="work" className="section work">
      <motion.div
        className="section-head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow"><span className="dot" /> Selected work</p>
        <h2>
          Screens that <span className="squiggle">sweat the details</span>
        </h2>
        <p className="section-lead">Tap a card to peek inside. Hover to give it a little wiggle.</p>
      </motion.div>

      <ul className="cards">
        {projects.map((p, i) => (
          <TiltCard key={p.id} project={p} index={i} onOpen={setOpenId} />
        ))}
      </ul>

      <AnimatePresence>
        {open && (
          <ProjectModal
            key="modal"
            project={open}
            onClose={() => setOpenId(null)}
            onNext={() => setOpenId(projects[(openIndex + 1) % projects.length].id)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
