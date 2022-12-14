import { createContext } from "react";
import { api } from "../services/api";
import  { setCookie, destroyCookie } from "nookies";
import Router from 'next/router';


interface ContextProps {
    Login: (data) => Promise<void>,
    Logout: () => Promise<void>
}


export const AuthContext = createContext({} as ContextProps);



export function AuthContextProvider({ children }){

    async function Login({ email, password }){

        
        try{const response = await api.post('/auth/login', { email, password });
        
        const { token, user } = response.data;

        if(token){
            setCookie(undefined, "next-auth-token", token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days,
                path: '/'
            })

            setCookie(undefined, "next-auth-user", JSON.stringify(user), {
                maxAge: 60 * 60 * 24 * 30, // 30 days,
                path: '/'
            })

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            if(user.role === 'ADM'){
                Router.push('/dashboard')
            } else if(user.role === 'default') {
                Router.push('/registers')
            }

            
        } else {
            return;
        }} catch(error){
            console.log(error);
        }
    
    }

    
    async function Logout(){
        destroyCookie(undefined, "next-auth-token");
        destroyCookie(undefined, "next-auth-user");
        Router.push('/');    
    }


    return (
        <AuthContext.Provider value={{ Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )   

}