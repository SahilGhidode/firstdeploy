import { createContext, useState } from "react";

export const AuthContext = createContext();



export default function AuthContextProvider({ children }) {

    const [auth,setAuth]=useState();
    const login=()=>{
        setAuth(true);
    }
    const logout=()=>{
        setAuth(false);
    }
    return (
        <AuthContext.Provider value={{auth,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}