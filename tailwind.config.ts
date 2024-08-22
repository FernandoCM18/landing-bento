import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'landing': '#202020',
      'text-primary': 'rgba(248, 248, 248, 0.95)',
      'text-secondary': 'rgba(248, 248, 248, 0.70)',
      'text-tertiary': 'rgba(248, 248, 248, 0.50)',
      'stroke-25-button': 'rgba(255, 255, 255, 0.40)',
      'surface-background': 'rgba(40, 40, 40, 0.70)',
    }
  },
  plugins: [],
};
export default config;
