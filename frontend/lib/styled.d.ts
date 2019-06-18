/* eslint-disable import/prefer-default-export */
import "styled-components"

// and extend them!
declare module "styled-components" {
	interface IColorMapping {
		100: string
		500: string
		900: string
	}

	declare type SizeScaling = "xs" | "sm" | "md" | "lg" | "xl"

	declare type FontWeightScaling =
		| "normal"
		| "light"
		| "medium"
		| "bold"
		| "black"

	declare interface ISizeScalingNumber {
		[key: SizeScaling]: number
	}

	export interface IDefaultTheme {
		fontFamily: string
		fontSizes: ISizeScalingNumber
		colors: {
			transparent: string
			black: string
			white: string
			grey: IColorMapping
			green: IColorMapping
			red: IColorMapping
			blue: IColorMapping
			purple: IColorMapping
		}
		spacing: ISizeScalingNumber
		breakpoints: ISizeScalingNumber
		fontWeight: FontWeightScaling
	}
}
