import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5", // indigo-600
          foreground: "#ffffff"
        },
        accent: {
          DEFAULT: "#10B981", // emerald-500
          foreground: "#06281d"
        },
        muted: {
          DEFAULT: "#64748B", // slate-500
          foreground: "#0b1220"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-playfair)", "ui-serif", "Georgia"]
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem"
        }
      }
    }
  },
  plugins: []
};

export default config;
