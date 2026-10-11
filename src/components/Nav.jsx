import { motion } from 'framer-motion'

export default function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
    >
      <motion.a href="#top" className="nav-logo" whileHover={{ rotate: -8, scale: 1.1 }} aria-label="Rachel Regnell, back to top">
        RR
      </motion.a>
      <nav aria-label="Main" className="nav-links">
        <a href="#work">Work</a>
        <a href="#gtm">GTM thinking</a>
        <motion.a href="#contact" className="btn btn-ink" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Get in contact
        </motion.a>
      </nav>
    </motion.header>
  )
}
