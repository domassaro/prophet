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
      colors: {
        secondary: {
          DEFAULT: "#3bccb6",
        },
        black: "#161212",
        yellow: "#ad9300",
        "nextui-foreground-400": "#161212",
        "yellow-accent": "#E0BE00",
        "button-accent": "#ffe44d",
        "default-color": "#f6f6f4",
        "prophet-green": "#3bccb6",
        "prophet-purple": "#9272e880",
        "neutral-900": "#05090D",
        "neutral-000": "#FFFFFF",
        "neutral-200": "#F6F7F7",
        "neutral-300": "#E7EAEB",
        "neutral-500": "#A7AAAB",
        "neutral-600": "#737680",
        "neutral-900": "#05090D",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
      },
    }),
  ],
};

export default config;
