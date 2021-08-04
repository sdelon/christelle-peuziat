const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.trueGray,
			'dore-light': '#ECDFAD',
			'dore-dark': '#D2C17F',
			'rose-light': '#FCFAF1',
		},
		extend: {
			fontFamily: {
				sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
				serif: ["'Playfair Display'", ...defaultTheme.fontFamily.serif]
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
};

module.exports = config;
