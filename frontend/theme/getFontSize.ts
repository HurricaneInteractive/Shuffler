import { SizeScaling } from "styled-components"
import { rem } from "./utils"
import theme from "./theme"

const getFontSize = (size: SizeScaling): string => {
	return `font-size: ${rem(theme.fontSizes[size])};`
}

export default getFontSize
