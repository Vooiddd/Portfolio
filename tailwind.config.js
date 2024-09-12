/** @type {import('tailwindcss').Config} */
export default {
  content: ["./layouts/*.vue", "./pages/**/*.vue", "./components/**/*.vue"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('@/assets/bg.jpg')",
        heroMobile: "url('@/assets/bg-mobile.jpg')",
        mail: "url('@/assets/mail.svg')",
        phone: "url('@/assets/phone.svg')",
        social: "url('@/assets/social.svg')",
      },
    },
  },
  plugins: [],
};
