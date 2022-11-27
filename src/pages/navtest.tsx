import { Navbar } from "../components/Navbar";
import { CalendarIcon } from "@chakra-ui/icons";

export default function Test (){
    return (
        <Navbar title="Meus registros" icon={<CalendarIcon fontSize="2xl" color="principalColor"/>}/>
    )
}