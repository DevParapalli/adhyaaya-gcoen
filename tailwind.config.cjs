const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');
const daisyui = require('daisyui');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [forms, typography, daisyui],
	daisyui: {
		themes: [
			'synthwave',
			'dark',
		]
	}
};

module.exports = config;
