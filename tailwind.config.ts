import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        lightAmber: "#FFFBF2", // Light mode background (Amber)
        amberPrimary: "#E6A15A", // Primary Amber Color
        amberDark: "#7D5A50", // Dark Mode Background (Brownish Amber)
        textLight: "#5C4033", // Text for Light Mode (Darker Amber)
        textDark: "#E6D5B8", // Text for Dark Mode (Light Amber)
      },
    },
  },
  plugins: [],
};

export default config;
