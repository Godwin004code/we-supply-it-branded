import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      'lg': {'max': '1000px'},
      'md-2': {'max': '950px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'xs': {'max': '400px'},
    }
  },
  plugins: [],
} satisfies Config;
