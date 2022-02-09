module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "1rem",
			},
			colors: {
				primary: {
					100: "#e6f8f4",
					200: "#cef1e8",
					300: "#b5eadd",
					400: "#9de3d1",
					500: "#84dcc6",
					600: "#6ab09e",
					700: "#4f8477",
					800: "#35584f",
					900: "#1a2c28",
				},
				secondary: {
					100: "#e8eaf4",
					200: "#d1d5e9",
					300: "#b9bfdf",
					400: "#a2aad4",
					500: "#8b95c9",
					600: "#6f77a1",
					700: "#535979",
					800: "#383c50",
					900: "#1c1e28",
				},
			},
			fontFamily: {
				primary: ["Lato", "sans-serif"],
				secondary: ["Playfair Display", "serif"],
			},
		},
	},
	plugins: [],
};
