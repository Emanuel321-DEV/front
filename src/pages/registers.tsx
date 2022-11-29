import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { CardItem } from "../components/CardItem";
import { BasicUsage } from "../components/ModalButton";
import { Navbar } from "../components/Navbar";
import { SlBookOpen } from "react-icons/sl";
import { CardList } from "../components/CardList";

export default function Register(){
    return(
        
        <Flex gap={5} width={700}>
            <Navbar title="Meus registros" icon={<Icon color="principalColor" as={SlBookOpen}/>}/>
            
            <Flex direction="column" mt={9} gap={5}>
                
                <BasicUsage />

                <CardList />

            </Flex>
        
        </Flex>
    )
}