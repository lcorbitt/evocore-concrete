import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "evocore-red": "#cc0000",
        "evocore-white": "#ffffff",
        "evocore-black": "#000000",
        "evocore-gray": "#a8abb3",
        "evocore-charcoal": "#141414",
        "evocore-steel": "#1e1e1e",
      },
      fontFamily: {
        sans: [
          "var(--font-arial-nova)",
          "Arial",
          "Helvetica Neue",
          "Helvetica",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-industry)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        label: [
          "var(--font-microgramma)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        montserrat: [
          "var(--font-montserrat)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "evocore-texture":
          "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.22) 2px, rgba(0,0,0,0.22) 3px), linear-gradient(155deg, #2a2a2a 0%, #0d0d0d 42%, #1c1c1c 100%)",
        "evocore-diagonal":
          "linear-gradient(135deg, rgba(204,0,0,0.12) 0%, transparent 38%, transparent 62%, rgba(204,0,0,0.08) 100%)",
      },
      boxShadow: {
        "evocore-red-glow": "0 0 40px -8px rgba(204, 0, 0, 0.45)",
      },
      keyframes: {
        "hero-headline-sheen": {
          "0%, 100%": {
            transform: "translate3d(calc(-50% - 38%), -50%, 0)",
          },
          "50%": {
            transform: "translate3d(calc(-50% + 38%), -50%, 0)",
          },
        },
      },
      animation: {
        "hero-headline-sheen": "hero-headline-sheen 7.5s ease-in-out infinite",
      },
    },
  },
} satisfies Config;

export default config;
