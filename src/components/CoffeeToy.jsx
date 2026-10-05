import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useSpring, useTransform } from 'framer-motion'

const menu = [
  { id: 'coffee', name: 'Coffee', note: '12 oz.', price: 5.5, color: '#7a4a2b' },
  { id: 'latte', name: 'Latte', note: '12 oz.', price: 6, color: '#c89b6d' },
  { id: 'scone', name: 'Scone', note: 'Blueberry', price: 2.5, color: '#6b6fd6' },
]
const TAX = 0.11
const money = (n) => `$${n.toFixed(2)}`

// A dollar amount that rolls smoothly to its new value.
function RollingPrice({ value }) {
  const spring = useSpring(value, { stiffness: 140, damping: 20 })
  const text = useTransform(spring, (v) => money(Math.max(0, v)))
  useEffect(() => spring.set(value), [spring, value])
  return <motion.span>{text}</motion.span>
}

function Confetti() {
  const colors = ['var(--pink)', 'var(--yellow)', 'var(--teal)', 'var(--purple)', 'var(--orange)']
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 36 }, (_, i) => {
        const angle = (i / 36) * Math.PI * 2
        const dist = 120 + (i % 5) * 30
        return (
          <motion.span
            key={i}
            style={{ background: colors[i % colors.length] }}
            initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
            animate={{
              x: Math.cos(angle) * dist,
              y: Math.sin(angle) * dist + 80,
              opacity: 0,
              scale: 0.4,
              rotate: 360 + i * 20,
            }}
            transition={{ duration: 1.3, ease: [0.15, 0.7, 0.4, 1] }}
          />
        )
      })}
    </div>
  )
}

export default function CoffeeToy() {
  const [qty, setQty] = useState({ coffee: 1, latte: 1, scone: 2 })
  const [ordered, setOrdered] = useState(0)

  const subtotal = menu.reduce((sum, item) => sum + item.price * qty[item.id], 0)
  const tax = subtotal * TAX
  const empty = subtotal === 0

  const bump = (id, delta) =>
    setQty((q) => ({ ...q, [id]: Math.min(9, Math.max(0, q[id] + delta)) }))

  const placeOrder = () => {
    if (empty) return
    setOrdered((n) => n + 1)
  }

  useEffect(() => {
    if (!ordered) return
    const t = setTimeout(() => setOrdered(0), 2600)
    return () => clearTimeout(t)
  }, [ordered])

  return (
    <section id="play" className="section play">
      <motion.div
        className="play-copy"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow"><span className="dot" /> Playground</p>
        <h2>
          I used to <em>serve</em> the coffee.
          <br />
          Now I <span className="highlight">design the checkout.</span>
        </h2>
        <p className="section-lead">
          This is a working version of my iOS coffee checkout. Change the quantities, watch the
          total update, then place your order. Fewer taps and no surprise fees: that's the
          front-of-house mindset I bring to every flow.
        </p>
      </motion.div>

      <motion.div
        className="phone"
        initial={{ opacity: 0, y: 60, rotate: 6 }}
        whileInView={{ opacity: 1, y: 0, rotate: 2 }}
        whileHover={{ rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      >
        <div className="phone-screen">
          <div className="phone-head">
            <span className="phone-title">almost there…</span>
            <motion.span
              className="phone-cup"
              animate={{ rotate: [0, -12, 12, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.5 }}
              aria-hidden="true"
            >
              ☕
            </motion.span>
          </div>

          <ul className="phone-items">
            {menu.map((item) => (
              <li key={item.id}>
                <span className="item-thumb" style={{ background: item.color }} aria-hidden="true" />
                <span className="item-info">
                  <strong>{item.name}</strong>
                  <em>{item.note}</em>
                  <span>{money(item.price)}</span>
                </span>
                <span className="stepper" role="group" aria-label={`${item.name} quantity`}>
                  <motion.button type="button" whileTap={{ scale: 0.8 }} onClick={() => bump(item.id, -1)} aria-label={`Remove one ${item.name}`}>
                    −
                  </motion.button>
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.output
                      key={qty[item.id]}
                      initial={{ y: -14, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 14, opacity: 0 }}
                      aria-live="polite"
                    >
                      {qty[item.id]}
                    </motion.output>
                  </AnimatePresence>
                  <motion.button type="button" whileTap={{ scale: 0.8 }} onClick={() => bump(item.id, 1)} aria-label={`Add one ${item.name}`}>
                    +
                  </motion.button>
                </span>
              </li>
            ))}
          </ul>

          <dl className="phone-totals">
            <dt>Items</dt>
            <dd><RollingPrice value={subtotal} /></dd>
            <dt>Taxes &amp; fees</dt>
            <dd><RollingPrice value={tax} /></dd>
            <dt>Pickup fee</dt>
            <dd>FREE</dd>
            <dt className="total">Total</dt>
            <dd className="total"><RollingPrice value={subtotal + tax} /></dd>
          </dl>

          <div className="phone-cta">
            <motion.button
              type="button"
              className="order-btn"
              onClick={placeOrder}
              disabled={empty}
              whileHover={empty ? undefined : { scale: 1.04 }}
              whileTap={empty ? undefined : { scale: 0.94 }}
            >
              {empty ? 'Add something tasty' : 'Place Order'}
            </motion.button>
          </div>

          <AnimatePresence>
            {ordered > 0 && (
              <motion.div
                key={ordered}
                className="order-done"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role="status"
              >
                <Confetti />
                <motion.p
                  initial={{ scale: 0.4, rotate: -10 }}
                  animate={{ scale: 1, rotate: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                >
                  Order up! ☕
                  <small>Thanks for playing.</small>
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}
