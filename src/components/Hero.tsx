'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Clock, MapPin, Shield } from 'lucide-react'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="inicio" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#0a0a0a', overflow: 'hidden' }}>
      
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src="/images/hero-bg.png" alt="Motoboy Coopstar Express em São Paulo" fill priority style={{ objectFit: 'cover', opacity: 0.35 }} sizes="100vw" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.2) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.9) 100%)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '120px 24px 80px', width: '100%' }}>
        
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(204,0,0,0.15)', border: '1px solid rgba(204,0,0,0.35)', color: '#ff8080', fontSize: 13, fontWeight: 600, padding: '6px 16px', borderRadius: 999, marginBottom: 24 }}>
          <span style={{ width: 7, height: 7, background: '#ff4444', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
          Atendimento 24h — São Paulo e Região
        </motion.div>

        {/* Title */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, color: '#fff', marginBottom: 24, lineHeight: 1.05 }}
          className="hero-title">
          Entregas{' '}
          <span className="text-gradient">Rápidas</span>
          <br />
          que Você Pode{' '}
          <span className="text-gradient">Confiar</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, lineHeight: 1.7, marginBottom: 40, maxWidth: 560 }}>
          Há mais de 9 anos, a Coopstar Express agiliza os processos das empresas paulistanas com
          motofretes, coletas e entregas especializadas —{' '}
          <strong style={{ color: '#fff' }}>rápido, seguro e confiável.</strong>
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 64 }}>
          <a href="https://wa.me/5511505235630?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank" rel="noopener noreferrer" id="cta-whatsapp-hero"
            className="pulse-cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#cc0000', color: '#fff', fontWeight: 700, fontSize: 16, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#aa0000')}
            onMouseLeave={e => (e.currentTarget.style.background = '#cc0000')}>
            Solicitar Orçamento Agora
            <ArrowRight size={18} />
          </a>
          <button onClick={() => scrollTo('servicos')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 600, fontSize: 16, padding: '14px 28px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)', cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}>
            Nossos Serviços
          </button>
        </motion.div>

        {/* Highlights */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, maxWidth: 600 }}>
          {[
            { icon: Clock, label: 'Atendimento 24h', sub: 'Segunda a Segunda' },
            { icon: MapPin, label: 'São Paulo e Grande SP', sub: 'Capital e Região' },
            { icon: Shield, label: '9+ Anos no mercado', sub: 'Empresa consolidada' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 14, padding: '12px 16px' }}>
              <div style={{ width: 38, height: 38, background: 'rgba(204,0,0,0.25)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={18} color="#ff6666" />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: 13, lineHeight: 1.2 }}>{label}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11 }}>{sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }}>Role</span>
        <div className="bob" style={{ width: 22, height: 36, border: '2px solid rgba(255,255,255,0.2)', borderRadius: 11, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 4 }}>
          <div style={{ width: 3, height: 8, background: '#cc0000', borderRadius: 2 }} />
        </div>
      </div>

      <style>{`
        .hero-title { font-size: clamp(38px, 6vw, 80px); }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      `}</style>
    </section>
  )
}
