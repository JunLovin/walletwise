/* eslint-env node */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                "yellow-gold": "#F39C12",
                "dark-blue-primary": "#2C3E50",
                "light-gray": "#BDC3C7",
                "gray-background-light": "#ECF0F1",
                "dark-background-dark-mode": "#2C3338",
                "light-gray-dark-mode": "#E8F0FE",
                "light-blue-dark-mode": "#5DADE2"
            },
        },
    },
    plugins: [],
}