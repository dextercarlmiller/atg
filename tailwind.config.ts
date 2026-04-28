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
        "primary-blue": "#0A2463",
        "accent-blue": "#1E6FD9",
        "accent-green": "#10B981",
        "dark-bg": "#0D1117",
        "light-bg": "#F8FAFC",
        "text-primary": "#111827",
        "text-secondary": "#6B7280",
        border: "#E5E7EB",
      },
      fontFamily: {
        sora: ["var(--font-sora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        h1: ["56px", { lineHeight: "1.1", fontWeight: "800" }],
        h2: ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["28px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["17px", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
};
export default config;
