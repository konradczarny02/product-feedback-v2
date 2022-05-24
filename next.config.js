/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
    COOKIE: process.env.COOKIE,
  },
};

module.exports = nextConfig;
