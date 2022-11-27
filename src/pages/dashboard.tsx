import { ChatIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { CardItem } from "../components/CardItem";
import { Navbar } from "../components/Navbar";
import { RiDashboardLine } from "react-icons/ri";
import { CardList } from "../components/CardList";



export default function Dashboard(){
    return(
        
        <Flex gap={5}>
            <Navbar title="Dashboard" icon={<Icon fontSize="2xl" color="principalColor" as={RiDashboardLine} />}/>
            
            <Flex direction="column" mt={9} gap={5}>


                <CardList />

            </Flex>
        
        </Flex>
    )
}