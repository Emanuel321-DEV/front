import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Heading,
    Text
  } from '@chakra-ui/react';
import { TimeIcon } from "@chakra-ui/icons";
import { parseCookies } from 'nookies';
import { api } from '../services/api';

export function BasicUsage() {
    
    const { isOpen, onOpen, onClose } = useDisclosure();

    async function handleRegister (){

      const { 'next-auth-user': userinfo} = parseCookies();
      
      const convertUser = JSON.parse(userinfo)


      const res = await api.post('/registered-time', { user: convertUser.id })
        
      onClose();
    }

    return (
      <>
        <Button onClick={onOpen} w="200px" h="50px" color="white" bg="principalColor" _hover={{ background: "#26046e" }} fontWeight="normal" >Registrar ponto</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay  bg='blackAlpha.300'
      backdropFilter='blur(2px)' />
          <ModalContent w={350}>
            <ModalHeader textAlign="center" mt={10}>Registrar novo ponto</ModalHeader>
            <ModalCloseButton />
            <ModalBody display="flex" flexDirection="column" alignItems="center" >
              <TimeIcon fontSize="6xl" color="principalColor"/>
              <Heading  m={2} as="h2" color="principalColor">
                10:30
              </Heading>
              <Text>26/09/2021</Text>
            </ModalBody>
  
            <ModalFooter display="flex" flexDirection="column" gap={2} mb={10}>
              
              <Button border="1px" bg="white" borderColor="principalColor" onClick={ () =>  handleRegister()} backgroundColor="principalColor" color="white" w="200px" h="50px">
                Bater ponto
              </Button>

              <Button border="1px" bg="white" borderColor="principalColor" onClick={onClose} color="principalColor" w="200px" h="50px">
                Cancelar
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }