/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      // Creating custom theme
      // Overwriting existing font-sizes
      fontSize: {
        sm: "0.7rem",  //12px
        base: "0,875rem",  //14px
        md: "1rem",  //16px
        lg: "1.25rem",  //20px
        xl: "1.5rem",  //24px
        "2xl": "1.75rem",  //28px
        "3xl": "2.25rem",  //36px
      },
    },
  },
  plugins: [],
};
