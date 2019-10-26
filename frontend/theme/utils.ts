const rem = (value: number, base: number = 16): string => {
	return `${value / base}rem`
}

// eslint-disable-next-line import/prefer-default-export
export { rem }
