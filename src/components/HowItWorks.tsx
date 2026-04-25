'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Bike, PackageCheck, BadgeCheck } from 'lucide-react'

const steps = [
  {
    id: 1,
    Icon: MessageSquare,
    title: 'Solicitação',
    description: 'Entre em contato pelo WhatsApp, telefone ou e-mail. Informe origem, destino e tipo de entrega. Resposta imediata.',
  },
  {
    id: 2,
    Icon: Bike,
    title: 'Coleta',
    description: 'Nosso motoboy chega no endereço no horário combinado para realizar a coleta com segurança e agilidade.',
  },
  {
    id: 3,
    Icon: PackageCheck,
    title: 'Entrega',
    description: 'Realizamos a entrega no destino com rapidez. Atendemos São Paulo Capital, Grande SP e região.',
  },
  {
    id: 4,
    Icon: BadgeCheck,
    title: 'Confirmação',
    description: 'Após a entrega, você recebe a confirmação. Mantemos o histórico de todas as suas solicitações.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="processo" ref={ref} style={{ background: '#fff', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative blob */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(204,0,0,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 32, height: 2, background: '#cc0000', display: 'block', borderRadius: 2 }} />
            <span style={{ color: '#cc0000', fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase' }}>Como Funciona</span>
            <span style={{ width: 32, height: 2, background: '#cc0000', display: 'block', borderRadius: 2 }} />
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(26px, 4vw, 50px)', color: '#111', lineHeight: 1.1, marginBottom: 16 }}>
            Simples, rápido e{' '}
            <span className="text-gradient">eficiente</span>
          </h2>
          <p style={{ color: '#777', fontSize: 16, maxWidth: 440, margin: '0 auto' }}>
            Em apenas 4 passos, sua entrega estará realizada com total segurança.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
          {steps.map(({ id, Icon, title, description }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              {/* Circle */}
              <div style={{ position: 'relative', marginBottom: 24 }}>
                <div style={{
                  width: 88, height: 88, borderRadius: '50%',
                  background: '#cc0000',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(204,0,0,0.25)',
                  transition: 'transform 0.3s',
                }}>
                  <Icon size={34} color="#fff" />
                </div>
                {/* Number badge */}
                <span style={{
                  position: 'absolute', top: -4, right: -4,
                  width: 26, height: 26, background: '#111', color: '#fff',
                  borderRadius: '50%', border: '2px solid #fff',
                  fontSize: 11, fontWeight: 900, fontFamily: 'Poppins, sans-serif',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {id}
                </span>
              </div>

              <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 18, color: '#111', marginBottom: 10 }}>
                {title}
              </h3>
              <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7, maxWidth: 240, margin: '0 auto' }}>
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.55 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <a
            href="https://wa.me/5511505235630?text=Olá!%20Gostaria%20de%20solicitar%20um%20serviço."
            target="_blank" rel="noopener noreferrer" id="cta-whatsapp-processo"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#cc0000', color: '#fff', fontWeight: 700, fontSize: 15,
              padding: '14px 32px', borderRadius: 12, textDecoration: 'none', transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#aa0000')}
            onMouseLeave={e => (e.currentTarget.style.background = '#cc0000')}
          >
            Solicitar Coleta Agora
          </a>
        </motion.div>
      </div>
    </section>
  )
}
