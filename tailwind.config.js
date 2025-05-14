/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Roboto", "sans-serif"], // Set Roboto as the primary font
        },
      },
    },
    plugins: [
      require("flowbite/plugin"), // Enable Flowbite plugin
    ],
  };
  