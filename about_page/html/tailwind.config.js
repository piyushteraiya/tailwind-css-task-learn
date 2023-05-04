/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,css,js}"],
    theme: {
        backgroundColor: {
            blue: "#1fb6ff",
            purple: "#7e5bef",
            pink: "#ff49db",
            orange: "#ff7849",
            red: "#FF0000",
            green: "#13ce66",
            yellow: "#ffc82c",
            gray: "#8492a6",
            black: "#000000",
            white: "#ffffff",
            "gray-dark": "#273444",
            "gray-light": "#d3dce6",
        },
        colors: {
            blue: "#1fb6ff",
            purple: "#7e5bef",
            pink: "#ff49db",
            orange: "#ff7849",
            red: "#FF0000",
            green: "#13ce66",
            yellow: "#ffc82c",
            black: "#000000",
            white: "#ffffff",
            gray: "#8492a6",
            "gray-dark": "#273444",
            "gray-light": "#d3dce6",
        },
        fontFamily: {
            sans: ["ProximaNova", "sans-serif"],
            serif: ["Merriweather", "serif"],
        },
        extend: {
            spacing: {
                "8xl": "96rem",
                "9xl": "128rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
        },
        fontSize: {
            '10xl': '9rem',
            '11xl': '10rem',
            '12xl': '11rem',
        },
        aspectRatio: {
            auto: 'auto',
            square: '1 / 1',
            video: '16 / 9',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
            13: '13',
            14: '14',
            15: '15',
            16: '16',
            17: '17',
            18: '18',
            19: '19',
            20: '20',
        },
    },
    variants: {
        aspectRatio: ['responsive', 'hover']
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        // ...
    ],
};