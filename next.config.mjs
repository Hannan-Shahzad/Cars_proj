// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;







/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          pathname: "/**", // Allow all paths under this hostname
        },
      ],
    },
  };
  
  export default nextConfig;
  