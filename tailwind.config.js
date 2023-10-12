// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0px 2px 0px 1px rgba(5, 9, 13, 0.06)",
      },
      colors: {
        secondary: {
          DEFAULT: "#025B4B",
        },
        black: "#000",
        "avocado-200": "#ECF1E0",
        avocado_300: "#E0E9CB",
        "brand-green-500": "#025B4B",
        "brand-marigold-500": "#E68A00",
        "marigold-200": "#FAE7CC",
        "neutral-900": "#05090D",
        "neutral-000": "#FFFFFF",
        "neutral-200": "#F6F7F7",
        "neutral-300": "#E7EAEB",
        neutral_400: "#D4D8D9",
        "neutral-500": "#A7AAAB",
        "neutral-600": "#737680",
        "neutral-900": "#05090D",
        "ocean-200": "#DEE8F6",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#025B4B",
            },
          },
        },
      },
    }),
  ],
};

export default config;
