/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.DOMAIN],
  },
};

module.exports = nextConfig;
