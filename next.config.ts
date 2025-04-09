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
  }
};

export default nextConfig;
