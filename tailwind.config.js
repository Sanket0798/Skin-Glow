/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/assets/HomePage/Hero/bgImg.jpg')",
        Category1:
          "url('../public/assets/HomePage/FeaturedCategories/img1.jpg')",
        Category2:
          "url('../public/assets/HomePage/FeaturedCategories/img2.jpg')",
        Category3:
          "url('../public/assets/HomePage/FeaturedCategories/img3.jpg')",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1600px",
    },
  },
  plugins: [],
};
