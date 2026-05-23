import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        surface: "#0f0f1a",
        "surface-2": "#13131f",
        "surface-3": "#1a1a2e",
        border: "#1e1e35",
        "border-bright": "#2a2a4a",
        cyan: {
          DEFAULT: "#67c4c4",
          muted: "#4a9999",
          dim: "#2a5a5a",
        },
        teal: {
          DEFAULT: "#5fb3a3",
          muted: "#3d8a7a",
          dim: "#1e4a42",
        },
        blue: {
          deep: "#3a6fa8",
          muted: "#2a5080",
          dim: "#162a45",
        },
        purple: {
          soft: "#8b7fc7",
          muted: "#6a5fa0",
          dim: "#2a254a",
        },
        text: {
          primary: "#e8e8f0",
          secondary: "#9090b0",
          muted: "#5a5a75",
          accent: "#67c4c4",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "#2a5a5a" },
          "50%": { borderColor: "#67c4c4" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#9090b0",
            maxWidth: "none",
            h1: { color: "#e8e8f0" },
            h2: { color: "#e8e8f0" },
            h3: { color: "#e8e8f0" },
            h4: { color: "#c0c0d8" },
            strong: { color: "#c0c0d8" },
            code: {
              color: "#67c4c4",
              backgroundColor: "#13131f",
              padding: "0.15em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "400",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            a: { color: "#67c4c4" },
            blockquote: {
              borderLeftColor: "#2a5a5a",
              color: "#7070908",
            },
            hr: { borderColor: "#1e1e35" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;