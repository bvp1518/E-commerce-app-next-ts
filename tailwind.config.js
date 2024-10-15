/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Adjust this path based on where your components are located
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', // Make sure to include your component folder
    './public/**/*.{html,js}', // Include public folder if necessary
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms', // Custom duration
      },
    },
  },
  plugins: [],
}
