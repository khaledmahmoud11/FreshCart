import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects(){
    return[
      {
        source:"/profile",
        destination:"/profile/addresses",
        permanent:true
      }
    ]

  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-products/**',
      },
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-categories/**',
      },
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/Route-Academy-brands/**',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
