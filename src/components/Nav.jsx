import { motion } from 'framer-motion'
import { links } from '../content.js'

export default function Nav({ onContact }) {
  return (
    <motion.header
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
    >
      <motion.a
        href={links.site}
        target="_blank"
        rel="noreferrer"
        className="nav-logo"
        whileHover={{ rotate: -8, scale: 1.1 }}
        aria-label="rr.design, Rachel's design studio (opens in a new tab)"
      >
        RR
      </motion.a>
      <nav aria-label="Main" className="nav-links">
        <a href="#work">Work</a>
        <a href="#gtm">GTM thinking</a>
        <a href="#experience">Experience</a>
        <motion.button type="button" className="btn btn-ink" onClick={onContact} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Get in contact
        </motion.button>
      </nav>
    </motion.header>
  )
}
