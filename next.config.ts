/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This generates a static 'out' folder
  images: {
    unoptimized: true, // Required for static export if using next/image
  },
};

export default nextConfig;