/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-gradient":
          "linear-gradient(180deg, #2D5A7B 0%, rgba(11, 46, 226, 0.3) 100%, rgba(50, 129, 187, 0.3) 100%)",
        "banner-btn-gradient":
          "linear-gradient(93.47deg, #57A5EC 7.81%, rgba(108, 161, 223, 0.55) 97.9%)",
        "social-gradient":
          "linear-gradient(135deg, #57A5EC 0%, rgba(108, 161, 223, 0.4) 100%)",
      },
      borderRadius: {
        main: "10px",
      },
    },
  },
  plugins: [],
};
