const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif']
		},
		extend: {
			colors: {
				purple: {
					light: '#6367CF',
					medium: '#45478F',
					dark: '#202142'
				},
				pink: {
					light: '#ff6a95',
					medium: '#8F3C53',
					dark: '#421C27'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
