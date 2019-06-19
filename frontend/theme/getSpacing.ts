import { ISpacingCombos, SizeScaling } from "styled-components"
import theme from "./theme"
import { rem } from "./utils"

const SpacingMapping: Record<ISpacingCombos, string | string[]> = {
	m: "margin",
	mb: "margin-bottom",
	ml: "margin-left",
	mr: "margin-right",
	mt: "margin-top",
	mx: ["margin-left", "margin-right"],
	my: ["margin-top", "margin-bottom"],
	p: "padding",
	pb: "padding-bottom",
	pl: "padding-left",
	pr: "padding-right",
	pt: "padding-top",
	px: ["padding-left", "padding-right"],
	py: ["padding-top", "padding-bottom"],
}

const returnCssProperty = (prop: string, value: number): string => {
	return `${prop}: ${rem(value)};`
}

const getFullSpacingString = (
	direction: ISpacingCombos,
	value: number
): string => {
	const mappingValue = SpacingMapping[direction]

	if (typeof mappingValue !== "string") {
		return mappingValue
			.map((cssProperty: string): string =>
				returnCssProperty(cssProperty, value)
			)
			.join("\n")
	}

	return returnCssProperty(mappingValue, value)
}

const makeSpacing = (direction: ISpacingCombos[], values: number[]): string => {
	return direction
		.map((dir: ISpacingCombos, i: number): string =>
			getFullSpacingString(dir, values[i] || 0)
		)
		.join("\n")
}

const getThemeSpacing = (
	direction: ISpacingCombos[],
	values: SizeScaling[]
): string => {
	return direction
		.map((dir: ISpacingCombos, i: number): string =>
			getFullSpacingString(dir, theme.spacing[values[i]])
		)
		.join("\n")
}

export { getThemeSpacing, makeSpacing }
