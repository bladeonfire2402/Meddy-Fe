// Import the plugin at the top of the file
import tailwindcssMotion from 'tailwindcss-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssMotion], // Use the imported plugin here
}
