import { useState } from "react";
import { AuthContext } from "../model/contextos";
import Axios from '../API/endpoints';
const axios = new Axios();


const AuthController = ({children}) => {

    const [ autenticado, setAutenticado ] = useState(false)


    return (
        <AuthContext.Provider value={autenticado}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthController;