'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2, Award, Users, Clock4 } from 'lucide-react'

const stats = [
  { icon: Award, value: '9+', label: 'Anos de experiência' },
  { icon: Users, value: '500+', label: 'Clientes atendidos' },
  { icon: Clock4, value: '24h', label: 'Disponibilidade' },
]

const benefits = [
  'Equipe especializada e treinada',
  'Atendimento personalizado para sua empresa',
  'Agendamento com hora marcada',
  'Rastreamento em tempo real disponível',
  'Documentos, encomendas e serviços bancários',
  'Retiradas em aeroportos e cartórios',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre" ref={ref} style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{ width: 32, height: 3, background: '#cc0000', borderRadius: 2, display: 'block' }} />
          <span style={{ color: '#cc0000', fontWeight: 700, fontSize: 12, letterSpacing: 3, textTransform: 'uppercase' }}>Quem Somos</span>
        </div>

        <div style={{ display: 'grid', gap: 64, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', alignItems: 'center' }}>

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', height: 480, boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}>
              <Image src="/images/about-team.png" alt="Equipe de motoboys Coopstar Express" fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)' }} />
            </div>
            {/* Float card */}
            <div style={{ position: 'absolute', bottom: -20, right: -16, background: '#fff', borderRadius: 16, padding: '16px 20px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', border: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 44, height: 44, background: '#fff5f5', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Award size={22} color="#cc0000" />
              </div>
              <div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 28, color: '#111', lineHeight: 1 }}>9+</div>
                <div style={{ color: '#777', fontSize: 12, fontWeight: 500, marginTop: 2 }}>Anos no mercado</div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}>
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 48px)', color: '#111', lineHeight: 1.1, marginBottom: 8 }}>
              Agilidade é o nosso{' '}
              <span className="text-gradient">negócio</span>
            </h2>
            <div style={{ width: 56, height: 4, background: 'linear-gradient(90deg, #cc0000, #ff4444)', borderRadius: 2, marginBottom: 24 }} />

            <p style={{ color: '#555', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
              A <strong style={{ color: '#111' }}>Coopstar Express</strong> é especializada em serviços de entregas e coletas,
              atuando há mais de nove anos no mercado paulistano.
            </p>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
              Atendemos São Paulo Capital e Grande São Paulo com equipe especializada.
              Funcionamos <strong style={{ color: '#111' }}>24 horas por dia, de segunda a segunda</strong>.
            </p>

            {/* Benefits */}
            <ul style={{ listStyle: 'none', marginBottom: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {benefits.map(b => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <CheckCircle2 size={18} color="#cc0000" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ color: '#444', fontWeight: 500, fontSize: 14 }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} style={{ textAlign: 'center', background: '#fafafa', border: '1px solid #eee', borderRadius: 16, padding: '16px 12px' }}>
                  <Icon size={18} color="#cc0000" style={{ margin: '0 auto 6px' }} />
                  <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 24, color: '#111' }}>{value}</div>
                  <div style={{ color: '#888', fontSize: 11, fontWeight: 500, lineHeight: 1.3 }}>{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
