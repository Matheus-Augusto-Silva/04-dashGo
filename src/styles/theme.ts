import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	fonts: {
		body: 'Roboto, sans-serif',
		heading: 'Roboto, sans-serif'
	},

	styles: {
		global: {
			body: {
				bg: 'gray.900',
				color: 'gray.50'
			}
		}
	}

})