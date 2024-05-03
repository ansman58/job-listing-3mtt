import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxss: "280px",
      // => @media (min-width: 280px) { ... }
      xxs: "300px",
      // => @media (min-width: 300px) { ... }
      xms: "320px",
      // => @media (min-width: 320px) { ... }
      xls: "380px",
      // => @media (min-width: 380px) { ... }
      xs: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "700px",
      // => @media (min-width: 768px) { ... }
      tablet: "800px",
      // => @media (min-width: 800px) { ... }
      sl: "940px",
      // => @media (min-width: 940px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xlg: "1180px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
        fs15: "0.9375rem",
      },
    },
  },
  plugins: [],
};
export default config;
