/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      //color
      colors: {
        'primary-400': '#00C8E0',
        'primary-200': '#7DDFEE',
        primary: '#f43f5e',
        primaryContainer: '#ff5a5f',
        onPrimary: '#ffffff',
        surface: '#f7f7f7',
        onSurface: '#261817',
        onSurfaceVariant: '#484848',
        outlineVariant: '#f3f4f6'
      }
    }
  },
  darkMode: 'class',
  plugins: []
};
