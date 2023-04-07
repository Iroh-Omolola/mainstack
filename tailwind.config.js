/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "786px",
      mmd: "800px",
      lg: "1024px",
      wlg: "1106px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
    },

    extend: {},
    colors: {
      primary: "#FF5403",
      text_black: "#56616B",
      black: "#000000",
      white: "#ffffff",
    },
    fontFamily: {
      sohne: ["../components/assets/font/Test-Söhne-Collection"],
      kraig: [
        "../components/assets/font/Test-Söhne-Collection1/Test-Söhne/TestSöhne-Kräftig.otf",
        "../components/assets/font/Test-Söhne-Collection1/Test-Söhne/TestSöhne-KräftigKursiv.otf",
        "../components/assets/font/Test-Söhne-Collection/Test-Söhne/test-soehne-kraftig.woff2",
      ],
      buch: [
        "../components/assets/font/Test-Söhne-Collection1/Test-Söhne/TestSöhne-Buch.otf",
        "../components/assets/font/Test-Söhne-Collection/Test-Söhne/test-soehne-buch.woff2",
      ],
      haibett: [
        "../components/assets/font/Test-Söhne-Collection1/Test-Söhne/TestSöhne-Halbfett.otf",
        "../components/assets/font/Test-Söhne-Collection/Test-Söhne/test-soehne-halbfett.woff2",
      ],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
