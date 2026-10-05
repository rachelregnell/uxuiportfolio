import { motion } from 'framer-motion'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#play', label: 'Play' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
    >
      <motion.a
        href="#top"
        className="nav-logo"
        aria-label="Rachel Regnell — back to top"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        rr
      </motion.a>
      <nav aria-label="Main">
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <motion.a href={l.href} whileHover={{ y: -3 }} whileTap={{ scale: 0.92 }}>
                {l.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
