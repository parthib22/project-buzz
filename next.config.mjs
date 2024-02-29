/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   missingSuspenseWithCSRBailout: false,
  // },
  images: {
    domains: [
      // "picsum.photos",
      // "images.unsplash.com",
      "lh3.googleusercontent.com",
      "art.pixilart.com",
    ],
  },
};

export default nextConfig;
