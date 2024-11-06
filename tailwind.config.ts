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
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#F7E6C6",
        "text-primary": "#b37917",
        "text-black": "#372f24",
        "text-secondary": "#969088",
        orange: "#ffeed9",
        gold: "#BD8712",
        "gold-hover": "#ffdea7",
        footer: "#fff8f3",
      },
      boxShadow: {
        full: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        bottom: "rgba(0, 0, 0, 0.15) 0px 4px 12px 0px",
      },
    },
  },
  plugins: [],
};
export default config;
