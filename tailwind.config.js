/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redclr: "#E85A4F",
        background: "#EAE7DC",
        hoverclr: "#E98074"
      },
      backgroundImage: {
        'bloodImg': "url('/src/assets/ezgif.com-webp-to-jpg.jpg')"
      }
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}

