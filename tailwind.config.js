/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#095169",
          "secondary": "#059b9a",
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require('@tailwindcss/forms')],
}