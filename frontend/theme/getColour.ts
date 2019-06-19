import { Colors, IColorMapping } from "styled-components"
import theme from "./theme"

const getColor = (color: Colors, scaling: keyof IColorMapping): string => {
	return theme.colors[color][scaling]
}

export default getColor
