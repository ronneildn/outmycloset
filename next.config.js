/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['outmycloset.org', 'www.outmycloset.org', 'http://www.outmycloset.org', 'https://www.outmycloset.org'],
  },
  webpack(config) {
        config.module.rules.push(
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"]
            }
        );

        return config;
    },
}

module.exports = nextConfig
