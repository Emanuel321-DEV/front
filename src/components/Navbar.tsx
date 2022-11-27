import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { ReactNode } from "react";


interface NavbarProps {
    icon: ReactNode;
    title: string;
}

export function Navbar( { icon, title }: NavbarProps ){
    return (

        <Flex h="100vh" w="180px" flexDirection="column" justifyContent="space-between" bg="white">
            
            <Flex flexDirection="column">
                <Box py={8}>
                    <Image src="/images/logo-pontogo.svg" maxW="134px" mx="20px"/>
                </Box>
                
                <Flex alignItems="center" gap={2} pl={4} py={10} border="1px" borderColor="gray.200" borderLeft="4px" borderLeftColor="principalColor">
                    {icon}
                    <Text color="principalColor">{title}</Text>
                </Flex>
            </Flex>
            
            <Flex alignItems="center" gap={2} px={4} py={3}>
                
                <Image src="/images/icons/power-icon.svg" alt="" h="20px" w="20px"/>
                <Text>
                    Sair
                </Text>
                
            </Flex>

        </Flex>

    )
}