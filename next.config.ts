import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: "var(--font-poppins)",
        montserrat: "var(--font-montserrat)",
        inter: "var(--font-inter)",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};


export default nextConfig;
