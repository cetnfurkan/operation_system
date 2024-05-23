/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wallpaper': "url('/images/wallpaper.svg')",
        'start-menu': "url('/images/start-menu.svg')",
      },
      colors: {
        'half-black': 'rgba(0, 0, 0, 0.41)',
        'near-black': 'rgba(0, 0, 0, 0.61)',
      },
    },
  },
  plugins: [],
}