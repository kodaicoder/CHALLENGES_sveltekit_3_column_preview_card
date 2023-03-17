const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				//! Primary
				brightOrange: 'hsl(31, 77%, 52%)',
				darkCyan: 'hsl(184, 100%, 22%)',
				veryDarkCyan: 'hsl(179, 100%, 13%)',

				//! Neutral
				transparentWhite: 'hsla(0, 0%, 100%, 0.75)', //?(paragraphs)
				veryLightGray: 'hsl(0, 0%, 95%)' //?(background, headings, buttons)
			},
			fontFamily: {
				bigShouldersDisplay: ['"BigShouldersDisplay"', ...defaultTheme.fontFamily.sans],
				lexendDeca: ['"LexendDeca"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
