import { motion, useMotionValue, useSpring } from 'framer-motion'
import { links } from '../content.js'

// A button that leans toward the pointer as it gets close.
function MagneticLink({ className, children, ...rest }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 15 })
  const sy = useSpring(y, { stiffness: 250, damping: 15 })
  return (
    <motion.a
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * 0.3)
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3)
      }}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
      whileTap={{ scale: 0.92 }}
      {...rest}
    >
      {children}
    </motion.a>
  )
}

const external = { target: '_blank', rel: 'noreferrer' }

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <motion.div
        className="contact-title"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      >
        Let's talk.
      </motion.div>
      <div className="contact-links">
        <MagneticLink href={links.email ? `mailto:${links.email}` : '#contact'} className="btn btn-yellow btn-big">
          Get in contact
        </MagneticLink>
        <MagneticLink href={links.resume || '#contact'} className="btn btn-outline btn-big" {...(links.resume ? { ...external, download: 'Rachel_Regnell_Resume.pdf' } : {})}>
          Download resume
        </MagneticLink>
        <a href={links.linkedin || '#contact'} className="text-link" {...(links.linkedin ? external : {})}>LinkedIn</a>
        <a href={links.site} className="text-link" {...external}>rr.design</a>
      </div>
      <div className="contact-foot">
        <span>© {new Date().getFullYear()} Rachel Regnell</span>
        <span>Built with React + Framer Motion</span>
      </div>
    </footer>
  )
}
