'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Início', href: 'inicio' },
  { label: 'Quem Somos', href: 'sobre' },
  { label: 'Serviços', href: 'servicos' },
  { label: 'Como Funciona', href: 'processo' },
  { label: 'FAQ', href: 'faq' },
  { label: 'Contato', href: 'contato' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      for (const link of [...navLinks].reverse()) {
        const el = document.getElementById(link.href)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(link.href)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
      }}
      className={scrolled ? 'glass-nav' : ''}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          
          {/* Logo */}
          <button onClick={() => scrollTo('inicio')} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: '#cc0000', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg viewBox="0 0 40 40" width={26} height={26} fill="none">
                <path d="M7 27 L20 11 L33 27" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="31" r="2.5" fill="white"/>
              </svg>
            </div>
            <div>
              <div style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 800, fontSize: 16, letterSpacing: 1, lineHeight: 1.1 }}>COOPSTAR</div>
              <div style={{ color: '#ff6666', fontSize: 9, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', lineHeight: 1 }}>Express</div>
            </div>
          </button>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden-mobile">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  padding: '8px 14px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: active === link.href ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: active === link.href ? '#fff' : 'rgba(255,255,255,0.6)',
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }} className="hidden-mobile">
            <a href="tel:+551150523563" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.6)', fontSize: 13, textDecoration: 'none' }}>
              <Phone size={14} color="#cc0000" />
              (11) 5052-3563
            </a>
            <a
              href="https://wa.me/5511505235630?text=Olá!%20Gostaria%20de%20um%20orçamento."
              target="_blank" rel="noopener noreferrer"
              id="cta-whatsapp-header"
              style={{ background: '#cc0000', color: '#fff', padding: '10px 20px', borderRadius: 10, fontWeight: 700, fontSize: 13, textDecoration: 'none', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#aa0000')}
              onMouseLeave={e => (e.currentTarget.style.background = '#cc0000')}
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 8 }}
            className="show-mobile"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: 'hidden', background: 'rgba(10,10,10,0.97)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div style={{ padding: '12px 24px 20px' }}>
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => { scrollTo(link.href); setOpen(false) }}
                  style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 0', color: 'rgba(255,255,255,0.8)', fontSize: 15, fontWeight: 500, background: 'none', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/5511505235630?text=Olá!%20Gostaria%20de%20um%20orçamento."
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', marginTop: 16, background: '#cc0000', color: '#fff', textAlign: 'center', padding: '14px', borderRadius: 10, fontWeight: 700, fontSize: 14 }}
              >
                Solicitar Orçamento pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  )
}
