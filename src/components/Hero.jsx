import { useRef } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../content.js'

const pop = ['var(--pink)', 'var(--purple)', 'var(--teal)', 'var(--orange)']

// Each letter bounces and changes color on hover.
function WiggleText({ text, className }) {
  return (
    <span className={className} aria-label={text}>
      {[...text].map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="wiggle-letter"
          initial={{ y: 80, opacity: 0, rotate: 12 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.3 + i * 0.04 }}
          whileHover={{
            y: -16,
            rotate: i % 2 ? 10 : -10,
            color: pop[i % pop.length],
            transition: { type: 'spring', stiffness: 500, damping: 10 },
          }}
        >
          {ch === ' ' ? ' ' : ch}
        </motion.span>
      ))}
    </span>
  )
}

// Stickers people can grab and toss around the hero.
function Sticker({ children, bounds, style, rotate = 0, delay = 0, label }) {
  return (
    <motion.div
      className="sticker"
      style={style}
      drag
      dragConstraints={bounds}
      dragElastic={0.25}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 12 }}
      initial={{ scale: 0, rotate: rotate - 40 }}
      animate={{ scale: 1, rotate }}
      transition={{ type: 'spring', stiffness: 220, damping: 12, delay }}
      whileHover={{ scale: 1.08, rotate: rotate + 6 }}
      whileDrag={{ scale: 1.18, rotate: rotate - 8, zIndex: 5, cursor: 'grabbing' }}
      data-cursor
      aria-label={label}
      role="img"
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const bounds = useRef(null)

  return (
    <section id="top" className="hero" ref={bounds}>
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <span className="dot" /> {profile.role}
        </motion.p>
        <h1>
          <WiggleText text="Hi, I'm" className="line" />
          <WiggleText text="Rachel!" className="line accent" />
        </h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          I design clear, friendly digital experiences, shaped by a background in
          hospitality, operations and keeping real people happy.
        </motion.p>
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15 }}
        >
          <motion.a href="#work" className="btn btn-primary" whileHover={{ scale: 1.05, rotate: -2 }} whileTap={{ scale: 0.95 }}>
            See my work ↓
          </motion.a>
          <motion.a href="#play" className="btn btn-ghost" whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
            Play with a prototype
          </motion.a>
        </motion.div>
      </div>

      <div className="stickers" aria-hidden="false">
        <Sticker bounds={bounds} style={{ top: '14%', right: '8%' }} rotate={-8} delay={0.9} label="Star sticker">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <path d="M50 4 61 36 96 37 68 58 78 92 50 72 22 92 32 58 4 37 39 36Z" fill="var(--yellow)" stroke="var(--ink)" strokeWidth="4" strokeLinejoin="round" />
          </svg>
        </Sticker>
        <Sticker bounds={bounds} style={{ top: '40%', right: '22%' }} rotate={10} delay={1.05} label="Coffee cup sticker">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <circle cx="50" cy="50" r="46" fill="var(--orange)" stroke="var(--ink)" strokeWidth="4" />
            <path d="M28 42h38v14a17 17 0 0 1-17 17h-4a17 17 0 0 1-17-17Z" fill="var(--cream)" stroke="var(--ink)" strokeWidth="4" />
            <path d="M66 46h4a8 8 0 0 1 0 16h-5" fill="none" stroke="var(--ink)" strokeWidth="4" />
            <path d="M40 24c-4 5 4 7 0 12M52 22c-4 5 4 7 0 12" fill="none" stroke="var(--ink)" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </Sticker>
        <Sticker bounds={bounds} style={{ bottom: '16%', right: '6%' }} rotate={-14} delay={1.2} label="UX sticker">
          <div className="pill-sticker">UX ✦ UI</div>
        </Sticker>
        <Sticker bounds={bounds} style={{ top: '62%', right: '34%' }} rotate={6} delay={1.35} label="Smiley sticker">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <circle cx="50" cy="50" r="46" fill="var(--teal)" stroke="var(--ink)" strokeWidth="4" />
            <circle cx="36" cy="42" r="6" fill="var(--ink)" />
            <circle cx="64" cy="42" r="6" fill="var(--ink)" />
            <path d="M30 60q20 22 40 0" fill="none" stroke="var(--ink)" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </Sticker>
        <Sticker bounds={bounds} style={{ top: '18%', right: '30%' }} rotate={-4} delay={1.5} label="Cursor sticker">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <path d="M22 10 80 52 52 56 66 86 54 92 40 62 22 80Z" fill="var(--pink)" stroke="var(--ink)" strokeWidth="4" strokeLinejoin="round" />
          </svg>
        </Sticker>
        <motion.p
          className="drag-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          ↖ psst, these are draggable
        </motion.p>
      </div>
    </section>
  )
}
