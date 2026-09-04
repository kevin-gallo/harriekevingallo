import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "harriekevingallo.vercel.app",
          },
        ],
        destination: "https://harriekevingallo.com/:path*",
        permanent: true,
      },
      /* Old multi-page routes now live on the one-pager or in Gals Lab */
      { source: "/about", destination: "/", permanent: true },
      { source: "/work", destination: "/lab/websites", permanent: true },
      {
        source: "/work/:slug",
        destination: "/lab/websites/:slug",
        permanent: true,
      },
      { source: "/lab/works", destination: "/lab/websites", permanent: true },
      {
        source: "/lab/works/:slug",
        destination: "/lab/websites/:slug",
        permanent: true,
      },
      { source: "/services", destination: "/lab/services", permanent: true },
      {
        source: "/services/:slug",
        destination: "/lab/services/:slug",
        permanent: true,
      },
      { source: "/tools", destination: "/lab/tools", permanent: true },
      {
        source: "/tools/:slug",
        destination: "/lab/tools/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
