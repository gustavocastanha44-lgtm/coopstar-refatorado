'use client'

import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Início',          href: 'inicio' },
  { label: 'Quem Somos',     href: 'sobre' },
  { label: 'Nossos Serviços',href: 'servicos' },
  { label: 'Como Funciona',  href: 'processo' },
  { label: 'FAQ',             href: 'faq' },
  { label: 'Contato',         href: 'contato' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)' }} role="contentinfo">
      
      {/* Main */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 48 }}>

          {/* Brand — Logo VERMELHO */}
          <div style={{ gridColumn: 'span 1' }}>
            {/* Logo vermelho */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: '#cc0000',
                boxShadow: '0 6px 20px rgba(204,0,0,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <svg viewBox="0 0 40 40" width={30} height={30} fill="none" aria-hidden="true">
                  <path d="M7 27 L20 11 L33 27" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="31" r="2.5" fill="white"/>
                </svg>
              </div>
              <div>
                <div style={{ color: '#fff', fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 20, letterSpacing: 1, lineHeight: 1.1 }}>
                  COOPSTAR
                </div>
                <div style={{ color: '#ff4444', fontSize: 10, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', lineHeight: 1 }}>
                  Express
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, lineHeight: 1.8, maxWidth: 280, marginBottom: 24 }}>
              Especialistas em motofretes, coletas e entregas em São Paulo Capital e Grande SP.
              Há mais de 9 anos agilizando sua logística.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="tel:+551150523563" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                <Phone size={14} color="#cc0000" />
                (11) 5052-3563 / 5051-4442
              </a>
              <a href="mailto:coopstar_express@hotmail.com" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                <Mail size={14} color="#cc0000" />
                coopstar_express@hotmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13 }}>
                <MapPin size={14} color="#cc0000" style={{ flexShrink: 0, marginTop: 2 }} />
                <span>Av. Juruçê, 898 — Moema, São Paulo-SP</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', color: '#fff', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>
              Navegação
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.45)', fontSize: 14, transition: 'color 0.2s', padding: 0, textAlign: 'left' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#ff6666')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', color: '#fff', fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, marginBottom: 20 }}>
              Atendimento
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 13 }}>
              <div>
                <p style={{ color: '#fff', fontWeight: 600, marginBottom: 2 }}>Segunda a Domingo</p>
                <p>24 horas por dia</p>
              </div>
              <div>
                <p style={{ color: '#fff', fontWeight: 600, marginBottom: 2 }}>Agendamento</p>
                <p>Com hora marcada</p>
              </div>
              <a
                href="https://wa.me/5511505235630?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
                target="_blank" rel="noopener noreferrer"
                id="cta-whatsapp-footer"
                style={{
                  display: 'inline-block', background: '#cc0000', color: '#fff',
                  fontWeight: 700, fontSize: 13, padding: '10px 20px', borderRadius: 10,
                  textDecoration: 'none', transition: 'background 0.2s', whiteSpace: 'nowrap',
                  alignSelf: 'flex-start', marginTop: 4,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#aa0000')}
                onMouseLeave={e => (e.currentTarget.style.background = '#cc0000')}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '18px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <p style={{ fontSize: 12 }}>© {new Date().getFullYear()} Coopstar Express. Todos os direitos reservados.</p>
          <p style={{ fontSize: 12 }}>São Paulo — SP · Brasil</p>
        </div>
      </div>
    </footer>
  )
}
