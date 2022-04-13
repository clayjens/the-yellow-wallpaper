module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                wallpaper: "url('../public/wallpaper.jpg')",
                wallpaper_torn: "url('../public/wallpaper_torn.jpg')",
            },
        },
    },
    plugins: [],
};
