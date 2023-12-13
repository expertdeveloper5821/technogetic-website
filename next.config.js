/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {};

module.exports = {
  images: {
    domains: ['technogetic.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
