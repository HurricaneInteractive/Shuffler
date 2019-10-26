import {
	SizeScaling,
	MediaQueryTypes,
	IMediaQueryContents,
} from "styled-components"
import theme from "./theme"

const mediaQuery = (
	breakpoint: SizeScaling,
	contents: IMediaQueryContents,
	type: MediaQueryTypes = "min"
): string => {
	const themeBreakpoint = theme.breakpoints[breakpoint]
	const breakAt = `${type === "min" ? themeBreakpoint : themeBreakpoint - 1}px`

	return `@media (${type}-width: ${breakAt}){\n${contents()}\n}`
}

export default mediaQuery
