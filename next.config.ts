import type { NextConfig } from "next";



module.exports = {
    output: 'standalone',
}

const nextConfig: NextConfig = {
    plugins: {
        "@tailwindcss/postcss": {},
    }/* config options here */
};

export default nextConfig;
