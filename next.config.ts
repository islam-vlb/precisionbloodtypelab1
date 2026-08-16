import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  output: 'standalone',
  outputFileTracingRoot: process.cwd(),
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
}
export default nextConfig
