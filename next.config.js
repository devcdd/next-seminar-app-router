/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "/public",
});

const nextConfig = {
  output: "export",
  // basePath: "/next-seminar-app-router",
  // assetPrefix: "/next-seminar-app-router",
};

// module.exports = nextConfig;
module.exports = withPWA(nextConfig);
