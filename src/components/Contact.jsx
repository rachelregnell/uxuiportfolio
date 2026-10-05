import { motion, useMotionValue, useSpring } from 'framer-motion'
import { profile } from '../content.js'

// A button that leans toward the pointer as it gets close.
function MagneticLink({ href, children, className, ...rest }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 15 })
  const sy = useSpring(y, { stiffness: 250, damping: 15 })

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={href}
      className={className}
      style={{ x: sx, y: sy }}
      onPointerMove={move}
      onPointerLeave={reset}
      whileTap={{ scale: 0.92 }}
      {...rest}
    >
      {children}
    </motion.a>
  )
}

export default function Contact() {
  const links = [
    profile.email && { href: `mailto:${profile.email}`, label: 'Say hello ✉', primary: true },
    profile.linkedin && { href: profile.linkedin, label: 'LinkedIn ↗', external: true },
    profile.resume && { href: profile.resume, label: 'Résumé ↗', external: true },
  ].filter(Boolean)

  return (
    <section id="contact" className="section contact">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      >
        Let's make something <span className="highlight">people actually enjoy</span> using.
      </motion.h2>

      <div className="contact-links">
        {links.length ? (
          links.map((l) => (
            <MagneticLink
              key={l.href}
              href={l.href}
              className={`btn ${l.primary ? 'btn-primary' : 'btn-ghost'} btn-big`}
              {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            >
              {l.label}
            </MagneticLink>
          ))
        ) : (
          <p className="section-lead">Contact links coming soon.</p>
        )}
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Designed &amp; built with lots of coffee + Framer Motion</span>
      </footer>
    </section>
  )
}
