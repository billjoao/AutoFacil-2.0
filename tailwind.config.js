/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                red500: "rgba(249, 119, 120, 1);",
                red400: "rgba(136, 0, 28, 1);",
                red1000: "rgb(22, 4, 3)",
            },
        },
    },
    plugins: [],
}
