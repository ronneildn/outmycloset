/** @type {import('next').NextConfig} */
const nextConfig = {
    //basePath: '/docs',
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "outmycloset.org",
            "www.outmycloset.org",
            "http://www.outmycloset.org",
            "https://www.outmycloset.org",
            "https://phenomenal-smile-1efcf2c825.media.strapiapp.com",
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "phenomenal-smile-1efcf2c825.media.strapiapp.com",
                port: "",
                pathname: "/*",
            },
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
    async redirects() {
        return [
            //Basic redirect
            {
                source: "/donate",
                destination:
                    "https://outmycloset.harnessgiving.org/campaigns/15177",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
