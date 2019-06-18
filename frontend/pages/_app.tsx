import React from "react"
import App, { Container } from "next/app"
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../theme/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
		font-family: ${props => props.theme.fontFamily};
  }
`

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props

		return (
			<ThemeProvider theme={theme}>
				<Container>
					<GlobalStyle />
					<Component {...pageProps} />
				</Container>
			</ThemeProvider>
		)
	}
}

export default MyApp
