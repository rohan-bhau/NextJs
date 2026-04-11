/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
// https://res.cloudinary.com/dj493l0jy/image/upload/v1773919679/foods/a8811bf2-485e-4f3a-80f8-8d1122cfedd0.png