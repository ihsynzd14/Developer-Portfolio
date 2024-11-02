import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    domains: ['i.imgur.com'], // Allow images from imgur
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withSentryConfig(nextConfig, {

silent: true,
org: "javascript-mastery",
project: "javascript-nextjs",
}, {

widenClientFileUpload: true,


transpileClientSDK: true,

hideSourceMaps: true,


disableLogger: true,


automaticVercelMonitors: true,
});