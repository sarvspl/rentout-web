import type { NextConfig } from "next";

/**
 * Pictures chosen in the admin panel are stored by the API and served from
 * its host, so next/image has to be told that host is allowed - without this
 * every uploaded city tile, tier card, category picture and avatar fails to
 * load in production.
 *
 * The host is read from the API URL rather than written down twice, so a
 * different deployment only ever sets RENTOUT_API_URL.
 */
const api = new URL(process.env.RENTOUT_API_URL ?? "http://127.0.0.1:8081/api/v1");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: api.protocol.replace(":", "") as "http" | "https",
        hostname: api.hostname,
        port: api.port,
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
