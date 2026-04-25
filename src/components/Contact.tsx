'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

const info = [
  { Icon: MapPin,  label: 'Endereço',       value: 'Av. Juruçê, 898 — Moema\nSão Paulo - SP' },
  { Icon: Phone,  label: 'Telefones',       value: '(11) 5052-3563\n(11) 5051-4442' },
  { Icon: Mail,   label: 'E-mail',          value: 'coopstar_express@hotmail.com' },
  { Icon: Clock,  label: 'Funcionamento',   value: '24 horas por dia\nSegunda a Segunda' },
]

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.7688753785604!2d-46.66309392378847!3d-23.60456264650127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a6b3e8b1e4b%3A0x4e38e5d00000001!2sAv.+Juruc%C3%AA%2C+898+-+Moema%2C+S%C3%A3o+Paulo+-+SP%2C+04080-003!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const msg = `Olá! Meu nome é ${form.nome}. ${form.mensagem} Tel: ${form.telefone}. E-mail: ${form.email}`
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      window.open(`https://wa.me/5511505235630?text=${encodeURIComponent(msg)}`, '_blank')
    }, 800)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: '#111', border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff', padding: '12px 16px', borderRadius: 10, fontSize: 14,
    outline: 'none', fontFamily: 'Inter, sans-serif', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contato" ref={ref} style={{ background: '#fff', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 32, height: 2, background: '#cc0000', display: 'block', borderRadius: 2 }} />
            <span style={{ color: '#cc0000', fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase' }}>Fale Conosco</span>
            <span style={{ width: 32, height: 2, background: '#cc0000', display: 'block', borderRadius: 2 }} />
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(26px, 4vw, 50px)', color: '#111', lineHeight: 1.1, marginBottom: 12 }}>
            Pronto para <span className="text-gradient">agilizar</span> sua logística?
          </h2>
          <p style={{ color: '#777', fontSize: 16 }}>Solicite um orçamento agora. Respondemos rapidamente!</p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 40, alignItems: 'start' }}>

          {/* Left — info + map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
          >
            {/* Info cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14, marginBottom: 28 }}>
              {info.map(({ Icon, label, value }) => (
                <div key={label} style={{ background: '#fafafa', border: '1px solid #eee', borderRadius: 16, padding: '16px 18px', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = '#ffcdd2')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#eee')}
                >
                  <div style={{ width: 36, height: 36, background: '#cc0000', borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <Icon size={16} color="#fff" />
                  </div>
                  <p style={{ fontSize: 10, fontWeight: 700, color: '#aaa', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>{label}</p>
                  <p style={{ fontSize: 13, fontWeight: 600, color: '#222', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{value}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e5e5e5', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', height: 300 }}>
              <iframe
                src={MAP_SRC}
                width="100%" height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Coopstar Express — Av. Juruçê 898, Moema, São Paulo"
                aria-label="Mapa de localização da Coopstar Express"
              />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }}
            style={{ background: '#0d0d0d', borderRadius: 24, padding: '36px 32px' }}
          >
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <CheckCircle size={56} color="#22c55e" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 10 }}>Mensagem enviada!</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Redirecionamos para o WhatsApp. Em breve entraremos em contato.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: 20, color: '#ff6666', fontSize: 13, fontWeight: 600, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}>
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 6 }}>Solicite um Orçamento</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 28 }}>Preencha o formulário e entraremos em contato pelo WhatsApp.</p>

                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label htmlFor="contact-nome" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Nome Completo *</label>
                    <input id="contact-nome" name="nome" type="text" required value={form.nome} onChange={handleChange} placeholder="Seu nome ou empresa" style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = '#cc0000')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-row">
                    <div>
                      <label htmlFor="contact-email" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>E-mail *</label>
                      <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="seu@email.com" style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = '#cc0000')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')} />
                    </div>
                    <div>
                      <label htmlFor="contact-telefone" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Telefone *</label>
                      <input id="contact-telefone" name="telefone" type="tel" required value={form.telefone} onChange={handleChange} placeholder="(11) 9 0000-0000" style={inputStyle}
                        onFocus={e => (e.currentTarget.style.borderColor = '#cc0000')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-mensagem" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>Mensagem *</label>
                    <textarea id="contact-mensagem" name="mensagem" rows={4} required value={form.mensagem} onChange={handleChange} placeholder="Descreva sua necessidade de entrega..." style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => (e.currentTarget.style.borderColor = '#cc0000')}
                      onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')} />
                  </div>

                  <button
                    type="submit" id="contact-submit" disabled={loading}
                    style={{ background: loading ? '#7a0000' : '#cc0000', color: '#fff', fontWeight: 700, fontSize: 15, padding: '14px', borderRadius: 12, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background 0.2s' }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#aa0000' }}
                    onMouseLeave={e => { if (!loading) e.currentTarget.style.background = '#cc0000' }}
                  >
                    {loading
                      ? <span style={{ width: 18, height: 18, border: '2.5px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'block' }} />
                      : <><span>Enviar pelo WhatsApp</span><Send size={16} /></>
                    }
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
