/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        Popin : ['Poppins', 'sans-serif'],
        
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
