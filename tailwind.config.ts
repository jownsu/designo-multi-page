import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E7816B",
        primary_light: "#FFAD9B",
		    black_1: "#FFAD9B",
        dark_grey: "#333136",
        light_grey: "#F3F4F6",
      }
    },
  },
  plugins: [],
};
export default config;
