import { motion } from 'framer-motion'

export default function NextProject({ project, onClick }) {
  return (
    <motion.button
      type="button"
      className="next"
      onClick={onClick}
      animate={{ backgroundColor: project.color, color: project.fg }}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.99 }}
    >
      <span className="next-label">Next project</span>
      <span className={`next-name ${project.name.length > 14 ? 'long' : ''}`}>
        {project.name}{' '}
        <motion.span
          className="next-arrow"
          variants={{ rest: { x: 0 }, hover: { x: 16 } }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          →
        </motion.span>
      </span>
    </motion.button>
  )
}
