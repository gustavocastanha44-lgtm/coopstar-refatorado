'use client'

import { useRef } from 'react'
import type { Variants } from 'framer-motion'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Bike, Package, MapPinned, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'moto-frete',
    Icon: Bike,
    title: 'Serviços Moto Frete',
    description: 'Entregas rápidas de documentos e pequenos volumes, incluindo serviços bancários, cartórios, despachos e retiradas em aeroportos.',
    image: '/images/moto-frete.png',
    alt: 'Motoboy entregando documentos em São Paulo',
    tags: ['Documentos', 'Bancário', 'Cartórios', 'Aeroportos'],
  },
  {
    id: 'delivery',
    Icon: Package,
    title: 'Delivery Empresarial',
    description: 'Implantamos um serviço de delivery na sua empresa com o melhor custo-benefício do mercado para alto volume de entregas.',
    image: '/images/delivery.png',
    alt: 'Delivery de restaurante e farmácia em São Paulo',
    tags: ['Farmácias', 'Pizzarias', 'Restaurantes', 'Auto Peças'],
  },
  {
    id: 'fora-capital',
    Icon: MapPinned,
    title: 'Fora da Capital',
    description: 'Atendemos municípios da Grande São Paulo e interior com rotas programadas e preços diferenciados. Consulte nossa tabela.',
    image: '/images/fora-capital.png',
    alt: 'Mapa de rotas para entregas na Grande São Paulo',
    tags: ['Grande SP', 'Interior', 'Roteiros', 'Tabela especial'],
  },
]

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] as [number,number,number,number] },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicos" ref={ref} style={{ background: '#0d0d0d', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <span style={{ width: 32, height: 2, background: '#cc0000', display: 'block', borderRadius: 2 }} />
            <span style={{ color: '#ff6666', fontWeight: 700, fontSize: 11, letterSpacing: 4, textTransform: 'uppercase' }}>Nossos Serviços</span>
            <span style={{ width: 32, height: 2, background: '#cc0000', display: 'block', borderRadius: 2 }} />
          </div>
          <h2 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 'clamp(26px, 4vw, 50px)', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
            Soluções completas em{' '}
            <span className="text-gradient">logística urbana</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 520, margin: '0 auto' }}>
            Do documento urgente à rota programada fora da capital, temos a solução certa para o seu negócio.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: 24 }}>
          {services.map(({ id, Icon, title, description, image, alt, tags }, i) => (
            <motion.article
              key={id} id={`service-${id}`}
              custom={i} variants={cardVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              style={{ background: '#181818', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 20, overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s' }}
              whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(204,0,0,0.12)' }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                <Image src={image} alt={alt} fill style={{ objectFit: 'cover', transition: 'transform 0.5s' }} sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, #181818 100%)' }} />
                <div style={{ position: 'absolute', top: 16, left: 16, width: 42, height: 42, background: '#cc0000', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color="#fff" />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '20px 24px 24px' }}>
                <h3 style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 19, color: '#fff', marginBottom: 10 }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{description}</p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                  {tags.map(t => (
                    <span key={t} style={{ fontSize: 11, fontWeight: 600, color: '#ff8080', background: 'rgba(204,0,0,0.12)', border: '1px solid rgba(204,0,0,0.2)', padding: '3px 10px', borderRadius: 999 }}>
                      {t}
                    </span>
                  ))}
                </div>

                <a href="https://wa.me/5511505235630?text=Olá!%20Tenho%20interesse%20nos%20serviços."
                  target="_blank" rel="noopener noreferrer" id={`cta-service-${id}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#ff6666', fontSize: 13, fontWeight: 700, textDecoration: 'none', transition: 'color 0.2s' }}>
                  Saiba mais <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
