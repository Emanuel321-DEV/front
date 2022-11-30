import * as React from "react";
import { render } from "react-dom";

import { Table } from "react-chakra-pagination";

import { ButtonGroup, ChakraProvider } from "@chakra-ui/react";

// Use Chakra Ui for create a custom component for display field date in table
import {
  Flex,
  Avatar,
  Text,
  Box,
  Icon,
  Button,
  Heading
} from "@chakra-ui/react";

// Recommended for icons
import { FiTrash2, FiUser } from "react-icons/fi";
import { CardItem } from "./CardItem";
import { useState } from "react";


type User = {
  id: number;
  colaborador: string;
  date: string;
  hour: string;

};


export function CardList({ data }) {


  const [ init, setInit ] = useState(0);
  const [ end, setEnd ] = useState(5);


  async function ManipuleState(changeInit: number, changeEnd: number){

    setInit(changeInit);
    setEnd(changeEnd);

  }

  return (
    <Flex boxSizing="border-box" p="12" pt="8" pl="5" flexDirection="column" w={800} h={600}>
      
      <Flex flexDir="column">
        <Flex w={[620]} justifyContent="space-between">
          <Text fontWeight="semibold" fontSize={20} >Colaborador</Text>
          <Text fontWeight="semibold" fontSize={20} >Data</Text>
          <Text fontWeight="semibold" fontSize={20} >Hour</Text>
        </Flex>
        
        <Flex h={450} w={[800]} flexDir="column" mt={3} gap={5}>
          
          {data?.map((register, index) => {

              if(index < end && index >= init){

                return (
                  <CardItem id={register.user.id} hour={register.hour} colaboratorName={register.user.name} date={register.timeRegistered}/> 
                )   
              }
          
          })
            
          }
        
        
        </Flex>

      </Flex>

      <Flex mt={5}>
        <ButtonGroup>
          <Button border="1px" borderColor="gray.300" borderRadius={0} onClick={() => ManipuleState(0, 5)}>1</Button>
          <Button border="1px" borderColor="gray.300" borderRadius={0} onClick={() => ManipuleState(5, 10) }>2</Button>
          <Button border="1px" borderColor="gray.300" borderRadius={0} onClick={() => ManipuleState(10, 15) }>3</Button>
          <Button border="1px" borderColor="gray.300" borderRadius={0} onClick={() => ManipuleState(15, 20)}>4</Button>
        </ButtonGroup>
      </Flex>

    </Flex>
  );
}

