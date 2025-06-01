// // tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx,html}", // укажи пути к своим файлам
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 "absolute-white": "#ffffff",
//                 "absolute-black": "#000000",
//                 "purple-55": "#4a2ced",
//                 "purple-60": "#5e43ef",
//                 "purple-70": "#8672f3",
//                 "purple-80": "#aea1f7",
//                 "purple-90": "#d6d0fb",
//                 "purple-95": "#eae7fd",
//                 "purple-97": "#f3f1fe",
//                 "purple-99": "#fbfaff",
//                 "dark-03": "#070708",
//                 "dark-06": "#0e0e10",
//                 "dark-08": "#131316",
//                 "dark-12": "#1c1c21",
//                 "dark-15": "#232329",
//                 "dark-20": "#2f2f37",
//                 "dark-25": "#3b3b45",
//                 "dark-30": "#474752",
//                 "grey-40": "#62646c",
//                 "grey-50": "#797c86",
//                 "grey-70": "#afb0b6",
//                 "grey-80": "#cacace",
//                 "grey-90": "#e4e4e6",
//                 "grey-95": "#f2f2f3",
//                 "grey-97": "#f7f7f8",
//                 "grey-99": "#fcfcfd",
//                 brand: {
//                     light: "#3ab7bf",
//                     DEFAULT: "#029fa5",
//                     dark: "#02686d",
//                 },
//             },
//         },
//     },
//     plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx,scss}", "./node_modules/flowbite/**/*.js"],
    theme: {
        spacing: (() => {
            const values = {};
            for (let i = 0; i <= 10000; i++) {
                values[i] = `${i}px`;
            }
            return values;
        })(),
        screens: {
            xs: "360px",
            sm: "480px",
            md: "764px",
            lg: "1200px",
            xl: "1920px",
        },
        extend: {
            colors: {
                dark: "#232323",
                light: "#fafafa",
                "ui-active": "#d9d9d9",
                ceramic: "#c69978",
                "ui-disabled": "#d2d2d2",
                "ui-error": "#db0c35",
                white: "#fff",
                "my-border": "#e2e1e5",
                link: "#a22dc6",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
};
