/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'desktop': {'min': '1256px'},
      'desktop2': {'max': '1257px'},
      'laptop': {'max': '1200px'},
      'tabletG': {'max': '1040px'},
      'mobile': {'max': '850px'},
    },
  },
  plugins: [],
};
