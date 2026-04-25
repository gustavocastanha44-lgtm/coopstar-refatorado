'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 'faq-1',
    question: 'Qual é o horário de atendimento da Coopstar Express?',
    answer: 'Funcionamos 24 horas por dia, 7 dias por semana, de segunda a segunda-feira. Para coletas agendadas, você pode marcar o horário preferencial. Para urgências, nossa equipe está disponível a qualquer hora.',
  },
  {
    id: 'faq-2',
    question: 'Quais regiões são atendidas?',
    answer: 'Atendemos São Paulo Capital e toda a Grande São Paulo. Para regiões fora da capital, temos uma tabela especial com preços diferenciados. Consulte-nos para verificar disponibilidade para sua região.',
  },
  {
    id: 'faq-3',
    question: 'Como faço para solicitar um serviço?',
    answer: 'Você pode solicitar via WhatsApp no número (11) 5052-3563, pelo telefone (11) 5051-4442 ou pelo e-mail coopstar_express@hotmail.com. O atendimento é imediato e você recebe o orçamento rapidamente.',
  },
  {
    id: 'faq-4',
    question: 'Que tipos de materiais são aceitos para entrega?',
    answer: 'Trabalhamos com documentos, correspondências, encomendas leves, medicamentos, alimentos (delivery), peças automotivas, materiais bancários e muito mais. Para cargas especiais, consulte nossa equipe.',
  },
  {
    id: 'faq-5',
    question: 'É possível fazer cadastro empresarial com conta mensal?',
    answer: 'Sim! Empresas com volume constante de entregas podem fazer cadastro corporativo e receber serviço diferenciado com relatórios mensais, faturamento e suporte prioritário. Entre em contato para saber mais.',
  },
]

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" ref={ref} style={{ background: '#0d0d0d', padding: '96px 24px' }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 32, height: 2, background: '#cc0000', display: 'block', borderRadius: 2 }} />
            <span style={{ color: '#ff6666', fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase' }}>Dúvidas Frequentes</span>
            <span style={{ width: 32, height: 2, background: '#cc0000', display: 'block', borderRadius: 2 }} />
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(26px, 4vw, 48px)', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
            Perguntas{' '}
            <span className="text-gradient">Frequentes</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15 }}>
            Tire suas principais dúvidas sobre nossos serviços.
          </p>
        </motion.div>

        {/* Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map(({ id, question, answer }, i) => {
            const isOpen = openId === id
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  background: '#181818',
                  border: `1px solid ${isOpen ? 'rgba(204,0,0,0.4)' : 'rgba(255,255,255,0.06)'}`,
                  borderRadius: 16,
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : id)}
                  aria-expanded={isOpen}
                  aria-controls={`${id}-answer`}
                  id={`${id}-btn`}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 16,
                    padding: '20px 24px', textAlign: 'left',
                    background: 'none', border: 'none', cursor: 'pointer',
                  }}
                >
                  <span style={{ color: '#fff', fontWeight: 600, fontSize: 15, lineHeight: 1.4, flex: 1 }}>
                    {question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ flexShrink: 0 }}
                  >
                    <ChevronDown size={20} color={isOpen ? '#cc0000' : 'rgba(255,255,255,0.4)'} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${id}-answer`}
                      role="region"
                      aria-labelledby={`${id}-btn`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{ padding: '0 24px 20px', color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.75 }}>
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom */}
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: 40, color: 'rgba(255,255,255,0.35)', fontSize: 14 }}
        >
          Não encontrou sua resposta?{' '}
          <a
            href="https://wa.me/5511505235630?text=Olá!%20Tenho%20uma%20dúvida."
            target="_blank" rel="noopener noreferrer"
            style={{ color: '#ff6666', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}
          >
            Fale no WhatsApp
          </a>
        </motion.p>
      </div>
    </section>
  )
}
