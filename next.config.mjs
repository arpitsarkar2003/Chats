/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "i.ibb.co", 
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com"
        ],
    },
    swcMinify: [
        ["next-superjson-plugin", {}]
    ]
};

export default nextConfig;
