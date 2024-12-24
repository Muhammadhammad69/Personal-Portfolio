import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "custom-gradient":'radial-gradient(circle at 30% 107%, #fdf497 0, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%)'
      },
      colors: {
        mainColor: "#FFB400",
        mainColor2: "#F0F0F6",
        mainColor3: "#727272",
        textColor: "#2B2B2B",
        textParaColor: "#767676"
      },
      screens: {
        xs:"395px"
      }
    },
    
  },
  plugins: [],
};
export default config;
