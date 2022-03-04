/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
    // This is the property you need to add
    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
    },
    flags: {
        DEV_SSR: false,
    },
}

module.exports = nextConfig
