/** @type {import('next').NextConfig} */

// module.exports = nextConfig

const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
};

export default nextConfig;