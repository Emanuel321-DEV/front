import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface CardItemProps {
    id: string;
    colaboratorName: string;
    date: string;
    hour: string;
}


export function CardItem( { colaboratorName, id, date, hour } : CardItemProps){

    return (
        <Box 
            bg="white" 
            border="1px"
            borderColor="gray.300"
            borderRadius={2}
            boxSizing="border-box"
            w={[1100]}
            h="73px"
            py={2}
            px={3}
        >
            <Flex 
                w={[600]} 
                alignItems="center" justifyContent="space-between" 
                border="4px"
                borderColor="transparent"
                borderLeftColor="secondaryColor" 
                h="55px"
                borderRadius="5px"

            >
                <Box ml={5}>
                    <Text fontWeight="extrabold" fontSize="1.2em">
                        {colaboratorName}
                    </Text>
                    <Text color="gray.300" as="span">{id}</Text>
                </Box>
                <Box>
                    <Text color="gray.500">{date}</Text>
                </Box>

                <Box>
                    <Text color="gray.500">{hour}</Text>
                </Box>
            </Flex>
            
        </Box>
    )


}