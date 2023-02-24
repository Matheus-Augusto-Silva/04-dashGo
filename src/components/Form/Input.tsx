import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'
import React from 'react'


interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <FormControl>
      <FormLabel htmlFor={name}>{label}</FormLabel>

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor='pink.500'
        bgColor='gray.900'
        variant='filled'
        size='lg'
        _hover={{
          bgColor: 'gray.900'
        }}
        {...rest}
      />

    </FormControl >

  )

}
