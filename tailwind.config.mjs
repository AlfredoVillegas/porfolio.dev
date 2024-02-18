/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      //color
      colors: {
        'primary-400': '#00C8E0',
        'primary-200': '#7DDFEE'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
