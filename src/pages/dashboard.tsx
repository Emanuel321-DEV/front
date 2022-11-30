import { ChatIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { CardItem } from "../components/CardItem";
import { Navbar } from "../components/Navbar";
import { RiDashboardLine } from "react-icons/ri";
import { CardList } from "../components/CardList";
import { useQuery } from "react-query";
import { api } from "../services/api";
import Router from 'next/router';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


export default function Dashboard(){
    const { Logout } = useContext(AuthContext);
    
    const { data, isError, isFetching } = useQuery('registers-func', async () => {
        

        const res = await api.get('/registered-time');
        
        console.log("ESTE EH RESPONSE", res);
        return res.data;
        

    });

    if(isError){
        Logout();
    }


    return(
        
        <Flex gap={5}>
            <Navbar title="Dashboard" icon={<Icon fontSize="2xl" color="principalColor" as={RiDashboardLine} />}/>
            
            <Flex direction="column" mt={9} gap={5}>


            {isFetching === true ? <h1>Aguarde</h1> : isError === true ? <h1>Erro</h1>:<CardList data={data}/>}

            </Flex>
        
        </Flex>
    )
}