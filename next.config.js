/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/flask/:slug*",
        destination: `http://127.0.0.1:5000/:slug*`,
      },
    ];
  },
};

module.exports = nextConfig;
