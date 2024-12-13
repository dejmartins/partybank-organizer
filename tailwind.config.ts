import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "partybank-red": "#E91B41",
        "partybank-text-black": "#080D18",
        "partybank-soft-grey": "#F8F9F9",
        "partybank-light-black": "rgba(0, 0, 0, 0.4)",
        "partybank-mid-red": "#FEEFF2",
        "partybank-light-red": "#FFF9FA",
        "partybank-dark-brown": "rgba(68, 47, 51, 1)",
        "partybank-light-brown": "rgba(253, 219, 225, 1)",
        "partybank-border": "#DDE0E3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
