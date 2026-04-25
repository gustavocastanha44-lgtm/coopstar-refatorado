import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Permite imagens locais da pasta public
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
