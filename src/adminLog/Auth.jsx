import React, { Children } from "react";
import { useState, createContext,useContext,useEffect } from "react";

const AuthContext = createContext();

export  const AuthProvider = ({children})=>{
    const [isAuth, setIsAuth] = useState(false);

    useEffect(()=>{
        const token = localStorage.getItem("token");
        setIsAuth(!token);
    },[])

    return(
        <AuthContext.Provider value={{isAuth,setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);