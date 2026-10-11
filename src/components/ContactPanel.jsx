import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { links } from '../content.js'

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const fieldRef = useRef(null)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard refused: select the address so it can be copied by hand.
      fieldRef.current?.select()
    }
  }
  return (
    <div className="cp-email">
      <label htmlFor="cp-email-field" className="cp-label">Email me directly</label>
      <div className="cp-email-row">
        <input id="cp-email-field" ref={fieldRef} readOnly value={links.email} onFocus={(e) => e.target.select()} />
        <button type="button" className="btn btn-ink" onClick={copy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <a className="cp-small-link" href={`mailto:${links.email}`}>Or open in your email app</a>
    </div>
  )
}

function MessageForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(links.formspree, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <motion.div className="cp-sent" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
        <div className="cp-sent-big">Sent!</div>
        <p>Thanks for reaching out. I'll get back to you soon.</p>
      </motion.div>
    )
  }

  return (
    <form className="cp-form" onSubmit={submit}>
      <div className="cp-field">
        <label htmlFor="cp-name">Your name</label>
        <input id="cp-name" name="name" required autoComplete="name" />
      </div>
      <div className="cp-field">
        <label htmlFor="cp-from">Your email</label>
        <input id="cp-from" name="email" type="email" required autoComplete="email" />
      </div>
      <div className="cp-field">
        <label htmlFor="cp-message">Message</label>
        <textarea id="cp-message" name="message" rows={4} required />
      </div>
      {/* Hidden from people; bots that fill it are dropped by Formspree. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="cp-hp" aria-hidden="true" />
      {status === 'error' && (
        <p className="cp-error" role="alert">
          That didn't send. Check your connection and try again, or email me at {links.email}.
        </p>
      )}
      <button type="submit" className="btn btn-ink btn-big" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}

export default function ContactPanel({ open, onClose }) {
  const tabs = [
    links.booking && { id: 'book', label: 'Book a call' },
    links.formspree && { id: 'message', label: 'Send a message' },
    { id: 'email', label: 'Email' },
  ].filter(Boolean)
  const [tab, setTab] = useState(tabs[0].id)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!open) return
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
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="cp-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="cp"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cp-title"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 60, opacity: 0, rotate: -1.5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            <div className="cp-head">
              <h2 id="cp-title">Let's talk.</h2>
              <button ref={closeRef} type="button" className="cp-close" onClick={onClose} aria-label="Close contact panel">
                ✕
              </button>
            </div>

            {tabs.length > 1 && (
              <div className="cp-tabs" role="tablist" aria-label="Ways to get in touch">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    role="tab"
                    aria-selected={tab === t.id}
                    className={`cp-tab ${tab === t.id ? 'is-active' : ''}`}
                    onClick={() => setTab(t.id)}
                  >
                    {tab === t.id && <motion.span layoutId="cp-tab-bg" className="cp-tab-bg" />}
                    <span className="cp-tab-label">{t.label}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="cp-body" role="tabpanel">
              {tab === 'book' && (
                <div className="cp-book">
                  <iframe src={links.booking} title="Book a call with Rachel" loading="lazy" />
                  <a className="cp-small-link" href={links.booking} target="_blank" rel="noreferrer">
                    Calendar not loading? Open it in a new tab
                  </a>
                </div>
              )}
              {tab === 'message' && <MessageForm />}
              {tab === 'email' && <CopyEmail />}
            </div>

            <div className="cp-foot">
              <a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={links.resume} target="_blank" rel="noreferrer" download="Rachel_Regnell_Resume.pdf">Résumé ↓</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
