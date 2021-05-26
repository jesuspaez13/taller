export const isPangram = (input) =>
	new Set([...input.toLowerCase().matchAll('[a-z]')].map((match) => match[0]))
		.size == 26;