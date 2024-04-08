/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    safelist: [
        "transition-border",
        "duration-500",
        "ease-in-out",
        "cursor-pointer",
        "border-b-4",
        "border-b-transparent",
        "hover:border-b-red-500",
        'hover:-translate-y-2',
        "hover:scale-105"
    ]
}