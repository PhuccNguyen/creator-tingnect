/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker optimization
  output: 'standalone',
  
  // Optimize images for production
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  
  // Enable compression
  compress: true,
  
  // Disable x-powered-by header for security
  poweredByHeader: false,
  
  // Enable experimental features if needed
  experimental: {
    // Enable if you need server actions
    // serverActions: true,
  },
}

module.exports = nextConfig