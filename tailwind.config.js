module.exports = {
	purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			black: "#151515",
			white: "#ffffff"
		},
		fontFamily: {
			body: ["KronaOne"]
		},
		gridTemplateRows: {
			layout: "100px 1fr 100px"
		},
		container: {
			center: true,
			padding: "2rem"
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
