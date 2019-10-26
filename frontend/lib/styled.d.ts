/* eslint-disable import/prefer-default-export */
import "styled-components"

// and extend them!
declare module "styled-components" {
	export interface IColorMapping {
		100: string
		500: string
		900: string
	}

	export declare type MediaQueryTypes = "min" | "max"

	export declare interface IMediaQueryContents {
		(): string
	}

	export declare type SizeScaling = "xs" | "sm" | "md" | "lg" | "xl"

	declare type FontWeightScaling =
		| "normal"
		| "light"
		| "medium"
		| "bold"
		| "black"

	export declare type Colors = "grey" | "green" | "red" | "blue" | "purple"

	export declare type ISpacingCombos =
		| "p"
		| "pt"
		| "pr"
		| "pb"
		| "pl"
		| "px"
		| "py"
		| "m"
		| "mt"
		| "mr"
		| "mb"
		| "ml"
		| "mx"
		| "my"

	export interface IDefaultTheme {
		fontFamily: string
		fontSizes: Record<SizeScaling, number>
		colors: Record<Colors, IColorMapping>
		spacing: Record<SizeScaling, number>
		breakpoints: Record<SizeScaling, number>
		fontWeight: Record<FontWeightScaling, number | string>
	}
}
