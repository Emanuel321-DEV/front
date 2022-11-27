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
                backgroundColor: "rgba(255, 255, 255, 0.7)",
            }
        }
    }

})