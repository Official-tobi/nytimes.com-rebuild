/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  env: {
    POLYGON_API_PASS_KEY: process.env.POLYGON_API_PASS_KEY,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
