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
        neutral1: "hsl(180, 31%, 95%)",
        neutral2: "hsl(180, 8%, 52%)",
        neutral3: "hsl(180, 14%, 20%)",
        primary: "hsl(180, 29%, 50%)",
      },
      backgroundColor: {
        neutralBg: "hsl(180, 52%, 96%)",
      },
      fontSize: {
        fs15: "15px",
      },
    },
  },
  plugins: [],
};
export default config;
