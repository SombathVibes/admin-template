import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.15'],
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default withNextIntl(nextConfig)
