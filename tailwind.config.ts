import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                black: '#020000',
                white: '#FAFAFA',
            },
            animation: {
                'fill-text': '1s cubic-bezier(0.19, 1, 0.22, 1) 0.5s 1 normal forwards running fill-text',
                'opacity-text': '0.0001s linear 1s 1 normal forwards running opacity-text',
            },
            keyframes: {
                'fill-text': {
                    '0%': {
                        left: '0px',
                        width: '0%',
                    },
                    '50%': {
                        left: '0%',
                        width: '100%',
                    },
                    '100%': {
                        left: '100%',
                        width: '0%',
                    },
                },
                'opacity-text': {
                    '0%': {
                        opacity: '0%',
                    },
                    '100%': {
                        opacity: '100%',
                    },
                },
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),

        function ({ addComponents }: any) {
            addComponents({
                '.container': {
                    width: '95%',
                    '@screen sm': {
                        width: '94%',
                    },
                    '@screen md': {
                        width: '92%',
                    },
                    '@screen lg': {
                        width: '88%',
                    },
                    '@screen xl': {
                        width: '84%',
                    },
                    '@screen 2xl': {
                        maxWidth: '1450px',
                    },
                },
            })
        },
        function addVariablesForColors({ addBase, theme }: any) {
            let allColors = flattenColorPalette(theme('colors'))
            let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

            addBase({
                ':root': newVars,
            })
        },
    ],
}
export default config
