import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// A springy ring that trails the pointer and grows over anything clickable.
// Mouse/trackpad only — the native cursor stays visible underneath.
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    setEnabled(fine.matches)
    if (!fine.matches) return

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHovering(!!e.target.closest?.('a, button, [data-cursor]'))
    }
    const down = () => setPressed(true)
    const up = () => setPressed(false)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="cursor"
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      animate={{ scale: pressed ? 0.7 : hovering ? 2.2 : 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    />
  )
}
