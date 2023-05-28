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
        cream: '#FCECD9',
        greydark: '#423D3D',
        greylight: '#949494',
        orangesmash: '#F59300',
        orangedark: '#cc7a00',
        blacklight: '#3b3b3b',
      },
    },
  },
  plugins: [],
};
