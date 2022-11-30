import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
    colors: {
        principalColor: '#330693',
        secondaryColor: '#8A53FF'
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            html: {
                margin: 0,
                border: 0,
                boxSizing: "border-box",
            },
            div: {
                margin: 0,
                border: 0,
                boxSizing: "border-box",
            },
            body: {
                margin: 0,
                border: 0,
                boxSizing: "border-box",
                backgroundColor: "#f2f2f2",
            }
        }
    }

})