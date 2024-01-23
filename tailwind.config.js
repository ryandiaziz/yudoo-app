/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "primary-100": "#8B5FBF",
                "primary-200": "#61398F",
                "primary-300": "#FFFFFF",
                "accent-100": "#D6C6E1",
                "accent-200": "#9A73B5",
                "text-100": "#4A4A4A",
                "text-200": "#878787",
                "bg-100": "#F5F3F7",
                "bg-200": "#E9E4ED",
                "bg-300": "#FFFFFF",
            },
            animation: {
                show: "show 270ms ease-in 1 normal forwards",
                keluar: "keluar 270ms ease-out 1 normal forwards",
            },
            keyframes: {
                show: {
                    from: {
                        opacity: "0",
                    },
                    to: {
                        opacity: "1",
                    },
                },
                keluar: {
                    "0%": {
                        transform: "translateX(0px)",
                    },
                    "100%": {
                        transform: "translateX(-200px)",
                    },
                },
            },
        },
    },
    plugins: [],
};
