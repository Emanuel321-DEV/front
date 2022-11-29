import { Container, Box, Flex, Text, Heading, Image, TagLabel, Button, Input, InputGroup, InputRightElement, Icon, Hide } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import { api } from "../services/api";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const [ show, setShow ] = useState(false);
  const handleClick = () => setShow(!show);
  
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const { Login, Logout } = useContext(AuthContext);

  async function handleSignIn(){
    
    console.log("REQUEST INTEND", email, password);
    
    await Login({ email, password });

  
  }


  return (

    <Flex justifyContent="center" w="100vw" h="100vh" bg="#ffffffb3">
      <Flex 
        w="80vw" 
        h="95vh" 
        m="auto" 
        justifyContent="space-evenly"
      >
      <Hide below="md">
        <Flex direction="column" gap={3}>
          <Box h="80%">
            <Image src="/images/img-login.svg" objectFit="cover" alt="" height="500px"/>
          </Box>
        
          <Box h="20%">
            <Heading as="h1" color="principalColor" >
              Bem vindo ao Ponto Go
            </Heading>
            <Text color="principalColor" w="381px" textAlign="center" mt={1}>Aqui voce fará toda gestão do  <br />seu sistema de pontos</Text>
          </Box>
        </Flex>
      </Hide>
   

      <Flex direction="column"justifyContent="center">
        <Image src="/images/logo-pontogo.svg" alt="" />
        <Heading as="h1" color="principalColor" my={5} >Faça login</Heading>
        
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
          border="1px"
          borderColor="gray.400"
          bg="white"
          placeholder='exemplo@gmail.com'
          _placeholder={{ opacity: 1, color: 'gray4500' }}
          mb={5}
        />
        
        <label htmlFor="password">Senha</label>
        <InputGroup size='md'>
          <Input
            id="password"
            bg="white"
            border="1px"
            onChange={(event) => setPassword(event.target.value)}
            borderColor="gray.400"
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='*********'
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick} bg="transparent">
              <ViewIcon color="principalColor"/>
            </Button>
          </InputRightElement>
        </InputGroup>    

        <Text color="principalColor" my={5}>
          Esqueci minha senha
        </Text>

        <Button onClick={() => handleSignIn()} bg="principalColor" _hover={{ background: "#26046e" }} color="white">
          Entrar
        </Button>

      </Flex>
      </Flex>
    </Flex>
  
  )
}
