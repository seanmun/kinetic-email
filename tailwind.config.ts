import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        text: "var(--color-text)",
        darkText: "var(--color-dark-text)",
      },
    },
  },
  plugins: [],
};

export default config;
