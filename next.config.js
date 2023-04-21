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
    USER: "u936807503_admin",
    PW: "Q2pKMnJ9XWt",
    DB: "u936807503_mydb",
    HOST: "sql753.main-hosting.eu",
    DBPORT: 3306,
    SERV: "mysql",
    TA: "lagente",
    NA: "name",
    TE: "tel",
    TO: "town",
    NU: "number",
    DE: "desc",
    KY: "keynum",
    EM: "email",
    API_1: "api/getlist",
    API_RKNCK: "api/recieveknock",
    API_PR: "/api/processemail",
    API_CHECK: "api/checkaprove",
    API_UP: "./api/update",
    DEFAULT: "default_service",
    TEMPLATE: "template_dw0t14f",
    PK: "b04nYPQtrugI_VvpZ",
  }
}

module.exports = nextConfig
