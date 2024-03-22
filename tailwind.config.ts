import type { Config } from "tailwindcss";
const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        container: {
            screens: {
                lg: "1111px"
            }
        },
        extend: {
            colors: {
                primary: "#E7816B",
                primary_light: "#FFAD9B",
                primary_lighter: "#FDF3F0",
                black_1: "#1D1C1E",
                dark_grey: "#333136",
                light_grey: "#F3F4F6"
            }
        },
        plugins: []
    }
};

export default config;