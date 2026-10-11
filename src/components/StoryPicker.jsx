import { useEffect } from 'react'
import { AnimatePresence, animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { INK, projects } from '../content.js'

const CREAM = '#FFF6E5'

// Counts up to a number; non-numeric results (e.g. "V2") just pop in.
function ResultBig({ value }) {
  const n = Number(value)
  const mv = useMotionValue(0)
  const text = useTransform(mv, (v) => Math.round(v).toString())
  useEffect(() => {
    if (Number.isNaN(n)) return
    mv.set(0)
    const controls = animate(mv, n, { duration: 1.1, ease: 'easeOut' })
    return () => controls.stop()
  }, [n, mv])
  const size = value.length > 3 ? 'small' : value.length === 3 ? 'mid' : 'big'
  return (
    <div className={`result-big result-big-${size}`}>
      {Number.isNaN(n) ? value : <motion.span>{text}</motion.span>}
    </div>
  )
}

function Visual({ step, project, onZoom }) {
  const v = step.visual
  if (!v) {
    return (
      <div className="result-card">
        <ResultBig value={project.result.big} />
        <p>{project.result.small}</p>
      </div>
    )
  }
  if (v.kind === 'pair') {
    // A tilted photo print laid over a document, each tappable to zoom.
    return (
      <div className="pair">
        <motion.button
          type="button"
          className="zoomable pair-doc"
          onClick={() => onZoom(v.doc)}
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ rotate: 3, opacity: 1 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          aria-label={`Zoom: ${v.doc.alt}`}
        >
          <img src={v.doc.src} alt={v.doc.alt} className="framed" />
        </motion.button>
        <motion.button
          type="button"
          className="zoomable pair-photo"
          onClick={() => onZoom(v.photo)}
          initial={{ rotate: -20, y: 40, opacity: 0 }}
          animate={{ rotate: -7, y: 0, opacity: 1 }}
          whileHover={{ rotate: -2, scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 220, damping: 16, delay: 0.12 }}
          aria-label={`Zoom: ${v.photo.alt}`}
        >
          <img src={v.photo.src} alt={v.photo.alt} />
        </motion.button>
      </div>
    )
  }
  if (v.kind === 'phones') {
    const tilt = [-6, 0, 6]
    return (
      <div className="phones">
        {v.phones.map((ph, i) => (
          <motion.button
            type="button"
            key={ph.src}
            className="zoomable phone-shot"
            onClick={() => onZoom(ph)}
            initial={{ rotate: 0, x: (1 - i) * 90, opacity: 0 }}
            animate={{ rotate: tilt[i], x: 0, y: i === 1 ? -14 : 0, opacity: 1 }}
            whileHover={{ y: -24, rotate: 0, zIndex: 2 }}
            transition={{ type: 'spring', stiffness: 220, damping: 18, delay: i * 0.06 }}
            aria-label={`Zoom: ${ph.alt}`}
          >
            <img src={ph.src} alt={ph.alt} />
          </motion.button>
        ))}
      </div>
    )
  }
  const img = (
    <button type="button" className="zoomable" onClick={() => onZoom(v)} aria-label={`Zoom: ${v.alt}`}>
      <img src={v.src} alt={v.alt} className={v.kind === 'image' ? 'framed' : ''} />
    </button>
  )
  if (v.kind === 'browser') {
    return (
      <div className="browser">
        <div className="browser-bar" aria-hidden="true">
          <span style={{ background: '#FF5FA2' }} />
          <span style={{ background: '#FFD23F' }} />
          <span style={{ background: '#19C37D' }} />
        </div>
        {img}
      </div>
    )
  }
  return <div style={{ width: v.width || '100%', margin: '0 auto' }}>{img}</div>
}

export default function StoryPicker({ p, s, onPick, onStep, onZoom }) {
  const project = projects[p]
  const step = project.steps[s]
  const wide = !!step.visual

  return (
    <section id="work" className="work">
      <div className="work-head">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pick a story
        </motion.h2>
        <span className="scribble">tap one, then flip through it →</span>
      </div>

      <div className="work-body">
        <div className="tabs" role="tablist" aria-label="Projects">
          {projects.map((x, i) => {
            const active = i === p
            return (
              <motion.button
                key={x.name}
                type="button"
                role="tab"
                aria-selected={active}
                className="tab"
                onClick={() => onPick(i)}
                animate={{ backgroundColor: active ? x.color : CREAM, color: active ? x.fg : INK, x: active ? 10 : 0 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <span className="tab-num">0{i + 1}</span>
                <span className="tab-name">{x.name}</span>
              </motion.button>
            )
          })}
        </div>

        <motion.div
          className="stage"
          role="tabpanel"
          animate={{ backgroundColor: project.color, color: project.fg }}
          transition={{ duration: 0.4 }}
        >
          <div className={`stage-visual ${wide ? 'is-wide' : ''}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${p}-${s}`}
                initial={{ opacity: 0, y: 30, rotate: -2, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, rotate: 2, scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              >
                <Visual step={step} project={project} onZoom={onZoom} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="stage-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={p}
                className="stage-intro"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
              >
                <div className="tags">{project.tags}</div>
                <h3 className={project.name.length > 14 ? 'long' : ''}>{project.name}</h3>
                <p className="hook">{project.hook}</p>
              </motion.div>
            </AnimatePresence>

            <div className="steps" role="group" aria-label="Steps">
              {project.steps.map((st, i) => (
                <motion.button
                  key={st.label}
                  type="button"
                  className={`step ${i === s ? 'is-active' : ''}`}
                  onClick={() => onStep(i)}
                  aria-pressed={i === s}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                >
                  {i === s && <motion.span layoutId="step-active" className="step-bg" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />}
                  <span className="step-label">{st.label}</span>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={`${p}-${s}`}
                className="caption"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                {step.caption}
              </motion.p>
            </AnimatePresence>
            {step.visual && <div className="zoom-hint">Tap an image to zoom</div>}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
