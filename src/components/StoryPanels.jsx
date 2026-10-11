import { AnimatePresence, motion } from 'framer-motion'

function Panel({ title, num, bg, fg, index, swapKey, children }) {
  return (
    <motion.div
      className="panel"
      style={{ background: bg, color: fg }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay: (index % 2) * 0.1 }}
    >
      <div className="panel-head">
        <div className="panel-title">{title}</div>
        <div className="panel-num" aria-hidden="true">{num}</div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={swapKey}
          className="panel-body"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}

function Chips({ items }) {
  return (
    <div className="chips">
      {items.map((t, i) => (
        <motion.span
          key={t}
          className="chip"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 + i * 0.05 }}
        >
          {t}
        </motion.span>
      ))}
    </div>
  )
}

export default function StoryPanels({ project }) {
  const st = project.story
  const k = project.name
  return (
    <section id="story" className="panels" aria-label={`${project.name} case study`}>
      <Panel title="Problem" num="01" bg="#2B50FF" fg="#FFFFFF" index={0} swapKey={k}>
        <p>{st.problem}</p>
      </Panel>
      <Panel title="Approach" num="02" bg="#FFD23F" fg="#14110F" index={1} swapKey={k}>
        <p>{st.approach}</p>
        <Chips items={st.approachChips} />
      </Panel>
      <Panel title="Result" num="03" bg="#FF5FA2" fg="#14110F" index={2} swapKey={k}>
        <p>{st.result}</p>
        <Chips items={st.resultChips} />
      </Panel>
      <Panel title="If I had more time" num="04" bg="#19C37D" fg="#14110F" index={3} swapKey={k}>
        <p>{st.more}</p>
        <ul className="todo">
          {st.todo.map((t) => (
            <li key={t}>
              <span className="todo-ring" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </Panel>
    </section>
  )
}
