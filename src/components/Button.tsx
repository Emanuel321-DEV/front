import { Button as Btn, useDisclosure } from "@chakra-ui/react";


interface ButtonProps {
    type: "cancel" | "register";

}


export function Button({ type }: ButtonProps){
    const { onClose } = useDisclosure();

    {type === 'register'? (
        <Btn 
            bg="white" 
            border="1px" 
            borderColor="principalColor" 
            onClick={onClose} backgroundColor="principalColor" 
            color="white" 
            w="200px" 
            h="50px"
        >
            Bater ponto
        </Btn>
    ) : (
        <Btn 
            bg="white" 
            border="1px" 
            borderColor="principalColor" 
            onClick={onClose} 
            color="principalColor" 
            w="200px" 
            h="50px"
        >
            Cancelar
        </Btn>)}


}