/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/property",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
