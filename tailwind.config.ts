import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			fontFamily: {
				primary: "var(--font-geist-sans)",
				secondary: "var(--font-geist-mono)",
				tertiary: "var(--font-montserrat)",
			},
		},
	},
	plugins: [],
} satisfies Config;
