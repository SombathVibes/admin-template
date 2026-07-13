import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.15'],
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
