import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    swcPlugins: [
      [
        '@swc/plugin-transform-imports',
        {
          '@': {
            transform: '@/${1}',
            preventFullImport: true
          }
        }
      ]
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
