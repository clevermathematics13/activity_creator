/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/api/generate': ['./MASTER_PROMPT.md'],
    },
  },
};

export default nextConfig;
