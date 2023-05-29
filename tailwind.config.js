/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#FFCC99',
        cream: '#F5E6CC',
        greydark: '#555358',
        greylight: '#ADABB0',
        orangesmash: '#EC7D10',
        orangedark: '#cc7a00',
        blacklight: '#3b3b3b',
        blackdark: '#222222',
      },
    },
  },
  plugins: [],
};
