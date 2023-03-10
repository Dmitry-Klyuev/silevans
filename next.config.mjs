/** @type {import('next').NextConfig} */

// module.exports = nextConfig

const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: './',
    },
};

export default nextConfig;