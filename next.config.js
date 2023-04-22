/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/processemail",
        destination: "http://localhost:3001/api/hello",
      },
    ];
  },
  env: {
    USER: process.env.USER,
    PW: process.send.PW,
    DB: process.env.DB,
    HOST: process.env.HOST,
    DBPORT: process.env.DBPORT,
    SERV: process.env.SERV,
    TA: process.env.TA,
    NA: process.env.NA,
    TE: process.env.TE,
    TO: process.env.TO,
    NU: process.env.NU,
    DE: process.env.DE,
    KY: process.env.KY,
    EM: process.env.EM,
    API_1: process.env.API_1,
    API_RKNCK: process.env.API_RKNCK,
    API_PR: process.env.API_PR,
    API_CHECK: process.env.API_CHECK,
    API_UP: process.env.API_UP,
    DEFAULT: process.env.DEFAULT,
    TEMPLATE: process.env.TEMPLATE,
    PK: process.env.PK,
  }
}

module.exports = nextConfig
