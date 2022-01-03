import { Center, Text, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import logo from 'images/navegador.png'

const Error = ({error}) => {
    return (
        <Center minH="100%" flexDirection="column"  >
            <Image src={logo} alt="error image" w="20rem" mb="1" />
            <Heading as="h3" colorScheme="tomato" fonstSize="1.5rem" mb="2" >Opss, Parece que Ocorreu um Erro!</Heading> 
            <Text as="span" color="red.500" >Tente Pesquisar Novamente</Text>
        </Center>
    )
}

export default Error
