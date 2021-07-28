const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {
			fontFamily: {
				'montserrat-500': "'Montserrat-500'",
				'montserrat-800': "'Montserrat-800'",
				southfall: "'Southfall', serif",
				sans: ["'Inter'", ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
};

module.exports = config;
