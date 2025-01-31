/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.paziresh24.com",
      },
    ],
  },

  //   images: {
  //     domains: ['assets.acme.com'],
  //   },
};

export default nextConfig;
