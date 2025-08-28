import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}){
    
    const {auth} =useContext(AuthContext);
    if(!auth) {
        return <Navigate to={"/login"}/>
    }

    return children;
}