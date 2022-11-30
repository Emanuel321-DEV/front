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
import { useEffect, useState } from 'react';
import { format, setDate } from 'date-fns';

export function BasicUsage() {
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ dateCurrent, setDateCurrent ] = useState('');
    const [ hourCurrent, setHourCurrent ] = useState('');

    async function handleRegister (){

      const { 'next-auth-user': userinfo} = parseCookies();
      
      const convertUser = JSON.parse(userinfo)


      const res = await api.post('/registered-time', { user: convertUser.id })
        
      onClose();
    }

    useEffect(()=> {
      const dateNow = new Date().toLocaleDateString();
      const hourNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});

      setDateCurrent(dateNow);
      setHourCurrent(hourNow);

    }, [])

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
              <Heading  m={2} as="h3" color="principalColor">
                {hourCurrent}
              </Heading>
              <Text>{dateCurrent}</Text>
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