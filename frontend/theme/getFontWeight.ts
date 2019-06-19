import { FontWeightScaling } from "styled-components"
import theme from "./theme"

const getFontWeight = (weight: FontWeightScaling): string => {
	return `font-weight: ${theme.fontWeight[weight]};`
}

export default getFontWeight
