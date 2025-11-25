import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: false,
  images: {
    remotePatterns: [new URL('https://fpuawmikrrnhgwzcpjnr.supabase.co/**')]
  }
}

export default nextConfig
