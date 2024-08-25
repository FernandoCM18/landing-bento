import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'landing': '#202020',
        'text-primary': 'rgba(248, 248, 248, 0.95)',
        'text-secondary': 'rgba(248, 248, 248, 0.70)',
        'text-tertiary': 'rgba(248, 248, 248, 0.50)',
        'stroke-25-button': 'rgba(255, 255, 255, 0.40)',
        'surface-background': 'rgba(40, 40, 40, 0.70)',
        'neutral-neutral-22': 'rgba(248, 248, 248, 0.02))',
        'stroke-15-card': 'rgba(255, 255, 255, 0.40))',



      },
      boxShadow: {
        'card-dark': '2px 4px 16px 0px rgba(248, 248, 248, 0.06), 0px 24px 24px -16px rgba(5, 5, 5, 0.09), 0px 6px 13px 0px rgba(5, 5, 5, 0.10), 0px 6px 4px -4px rgba(5, 5, 5, 0.10), 0px 5px 1.5px -4px rgba(5, 5, 5, 0.25)',

      }
    }
  },
  plugins: [],
};
export default config;
