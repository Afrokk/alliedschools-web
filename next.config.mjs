/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "",
  experimental: {
    reactCompiler: {
      compilationMode: "annotation",
    },
  },
};

export default nextConfig;
