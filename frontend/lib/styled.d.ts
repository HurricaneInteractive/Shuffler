/* eslint-disable import/prefer-default-export */
import "styled-components"

// and extend them!
declare module "styled-components" {
	export interface IDefaultTheme {
		fontFamily: string
	}
}
