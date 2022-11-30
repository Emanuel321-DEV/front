import axios from "axios";
import Router  from "next/router";
import { destroyCookie, parseCookies } from "nookies";

export const api = axios.create({
    baseURL: "http://localhost:3001"
});


api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    console.log("ERROR EXAMPLE", error)
    
    if(error.response?.data?.statusCode == 401){
        destroyCookie(undefined, 'next-auth-token');
        destroyCookie(undefined, 'next-auth-user');

        Router.push('/');
    }
})