import { Container, Box, Flex, Text, Heading, Image, TagLabel, Button, Input, InputGroup, InputRightElement, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon } from "@chakra-ui/icons";

export default function Home() {
  const [ show, setShow ] = useState(false);
  const handleClick = () => setShow(!show);


  return (

    <Flex justifyContent="center" w="100vw" h="100vh">
      <Flex 
      w="80vw" 
      h="95vh" 
      m="auto" 
      justifyContent="space-evenly"
    >
      <Flex direction="column" gap={3}>
        <Box h="80%">
          <Image src="/images/img-login.svg" objectFit="cover" alt="" height="500px"/>
        </Box>
        
        <Box h="20%">
          <Heading as="h1" color="principalColor" >
            Bem vindo ao Ponto Go
          </Heading>
          <Text color="principalColor">Aqui voce fará toda gestão do seu sistema de pontos</Text>
        </Box>
      
      </Flex>

      <Flex direction="column" gap={2} justifyContent="center">
        <Image src="/images/logo-pontogo.svg" alt="" />
        <Heading as="h1" color="principalColor" >Faça login</Heading>
        
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          placeholder='exemplo@gmail.com'
          _placeholder={{ opacity: 1, color: 'gray.500' }}
        />
        
        <label htmlFor="password">Senha</label>
        <InputGroup size='md'>
          <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='*********'
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              <ViewIcon color="principalColor"/>
            </Button>
          </InputRightElement>
        </InputGroup>    

        <Text color="principalColor">
          Esqueci minha senha
        </Text>

        <Button bg="principalColor" color="white">
          Entrar
        </Button>

      </Flex>
      </Flex>
    </Flex>
  
  )
}