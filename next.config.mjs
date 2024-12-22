/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self' https://noel-listing-eu-c736376029b8.herokuapp.com http://localhost:3001 ;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://noel-listing-eu-c736376029b8.herokuapp.com accounts.google.com/gsi/client;
    style-src 'self' 'unsafe-inline' https://noel-listing-eu-c736376029b8.herokuapp.com accounts.google.com;
    img-src 'self' blob: data: https://noel-listing-eu-c736376029b8.herokuapp.com https://github.com/ https://avatars.githubusercontent.com localhost:3001 accounts.google.com lh3.googleusercontent.com;
    font-src 'self' https://noel-listing-eu-c736376029b8.herokuapp.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

const nextConfig = {
    images: {
        minimumCacheTTL: 900,
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true,
            },
        ]
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: cspHeader.replace(/\n/g, ''),
                    },
                ],
            },
        ]
    },
}

export default nextConfig
