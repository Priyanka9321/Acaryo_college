import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: "#041d3d",
        secondary: "#d5ad51",
        background: "#ffffff",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)",
      },
      keyframes: {
        kenBurns: {
          "0%":   { transform: "scale(1)    translateX(0)" },
          "50%":  { transform: "scale(1.08) translateX(-1%)" },
          "100%": { transform: "scale(1)    translateX(0)" },
        },
      },
      animation: {
        "ken-burns": "kenBurns 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
