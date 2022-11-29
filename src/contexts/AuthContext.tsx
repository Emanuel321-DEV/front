import { createContext } from "react";
import { api } from "../services/api";
import  { setCookie, destroyCookie } from "nookies";
import Router from 'next/router';

const AuthContext = createContext({});



export function AuthContextProvider({ children }){

    async function Login({ email, password }){
        
        
        const response = await api.post('/auth/login', { email, password });
        
        const { token, user } = response.data;

        if(token){
            setCookie(undefined, "next-auth-token", token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days,
                path: '/'
            })

            if(user.role === 'ADM'){
                Router.push('/dashboard')
            } else {
                Router.push('/registers')
            }

            
        } else {
            return null;
        }
    
    }

    
    async function Logout(){
        destroyCookie(undefined, "next-auth-token");
        Router.push('/');      
        
    }


    return (
        <AuthContext.Provider value={{ Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )   

}