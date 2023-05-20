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
        /** 
         * Legg til de fargene du vil ha her

         * blue: "#21A2B9" Dette er et eksempel

        **/
        light: '#FFCC99',
        cream: '#fbfae5',
      },
    },
  },
  plugins: [],
};
