/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  ttheme: {
  extend: {
  colors: {
    bgprimary: "var(--bg-primary)",
    bgsecondary: "var(--bg-secondary)",
    accent: "var(--accent-green)",
    muted: "var(--accent-muted)",
    textmain: "var(--text-main)",
    textdim: "var(--text-dim)",
  }
}
},
  plugins: [],
};