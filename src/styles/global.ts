import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
    colors: {
        principalColor: '#330693'
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                backgroundColor: '#fff',
                opacity: 0.7
            }
        }
    }

})