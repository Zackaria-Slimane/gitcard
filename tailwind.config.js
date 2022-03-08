module.exports = {
	purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				102: "32rem",
				104: "34rem",
				106: "36rem",
				108: "38rem",
				110: "40rem",
			},
			colors: {
				mainblue: "#264653",
				bgColor: "#020922",
				secondaryBg: "#171A38",
				btnColor: "#4A77EA",
				blobs: "#73BCED",
				eggshel: "#F4F1DE",
				coldblue: "#3D405B",
				honey: "#F4A261",
				mandarine: "#E76F51",
				champagne: "#FECB90",
				grayblue: "#ebf0f7",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				ubuntu: ["Ubuntu", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
