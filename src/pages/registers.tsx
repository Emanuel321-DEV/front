import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { CardItem } from "../components/CardItem";
import { BasicUsage } from "../components/ModalButton";
import { Navbar } from "../components/Navbar";
import { SlBookOpen } from "react-icons/sl";
import { CardList } from "../components/CardList";
import { api } from "../services/api";
import { parseCookies } from "nookies";
import { useQuery } from "react-query";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

export default function Register(){

    const { Logout } = useContext(AuthContext);
    
    const { data, isError, isFetching } = useQuery('registers-func', async () => {

        const { 'next-auth-user': userinfo} = parseCookies();
      
        const convertUser = JSON.parse(userinfo);
        
        const res = await api.get(`/registered-time/${convertUser.id}`);        

        return res.data;
    });


    if(isError){
        Logout();
    }


    

    return(
        
        <Flex gap={5} width="80vw">
            <Navbar title="Meus registros" icon={<Icon color="principalColor" as={SlBookOpen}/>}/>
            
            <Flex direction="column" mt={9} gap={0}>
                
                <BasicUsage />
                {isFetching === true ? <h1>Aguarde</h1> : isError === true ? <h1>Erro</h1> :<CardList data={data}/>
}
                
            </Flex>
        
        </Flex>
    )
}