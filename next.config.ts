import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.themealdb.com",
				port: "",
				pathname: "/images/media/meals/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
