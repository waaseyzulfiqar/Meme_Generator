/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.imgflip.com', // Replace with the actual hostname
          pathname: '/**', // Allow all pathnames
        },
      ],
    },
  };
  
  export default nextConfig;