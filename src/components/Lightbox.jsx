import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Lightbox({ image, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!image) return
    const prev = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus?.()
    }
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button ref={closeRef} type="button" className="lightbox-close" onClick={onClose}>
            Close ✕
          </button>
          <motion.img
            src={image.src}
            alt={image.alt}
            initial={{ scale: 0.85, rotate: -2 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
