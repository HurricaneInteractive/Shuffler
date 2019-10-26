import { IDefaultTheme } from "styled-components"

const theme: IDefaultTheme = {
	fontFamily:
		"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	fontSizes: {
		xs: 14,
		sm: 16,
		md: 32,
		lg: 64,
		xl: 128,
	},
	colors: {
		grey: {
			100: "#e2e8f0",
			500: "#a0aec0",
			900: "#1a202c",
		},
		green: {
			100: "#9ae6b4",
			500: "#48bb78",
			900: "#22543d",
		},
		red: {
			100: "#feb2b2",
			500: "#f56565",
			900: "#742a2a",
		},
		blue: {
			100: "#90cdf4",
			500: "#4299e1",
			900: "#2a4365",
		},
		purple: {
			100: "#d6bcfa",
			500: "#9f7aea",
			900: "#44337a",
		},
	},
	spacing: {
		xs: 8,
		sm: 16,
		md: 32,
		lg: 64,
		xl: 128,
	},
	breakpoints: {
		xs: 321,
		sm: 768,
		md: 1024,
		lg: 1200,
		xl: 1366,
	},
	fontWeight: {
		normal: "normal",
		light: 300,
		medium: 500,
		bold: "bold",
		black: 900,
	},
}

export default theme
