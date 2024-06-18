import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
        urdu: ['var(--font-noto-urdu)'],
      },
    },
  },
  plugins: [],
};
export default config;
