import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Coopstar Express | Motofretes e Entregas em São Paulo 24h',
  description:
    'Coopstar Express — empresa especializada em motofretes, coletas e entregas rápidas em São Paulo Capital e Grande SP. Atendemos 24h, de segunda a segunda. Solicite um orçamento!',
  keywords: [
    'mototfrete',
    'motofrete SP',
    'entrega rápida São Paulo',
    'coleta e entrega',
    'delivery São Paulo',
    'Coopstar Express',
    'motoboy Moema',
    'entregas 24h',
  ],
  authors: [{ name: 'Coopstar Express' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Coopstar Express | Motofretes e Entregas em São Paulo 24h',
    description:
      'Mais de 9 anos conectando empresas aos seus clientes com agilidade e confiabilidade. Atendemos São Paulo Capital e Grande SP 24 horas por dia.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
