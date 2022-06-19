import { useState, useEffect, useReducer } from "react";
import { AuthContext } from "../model/contextos";
import { authReducer } from "../model/reduces";
import Axios from '../API/endpoints';
const axios = new Axios();

const inicialState = { 
    usuario: {},
    token: ''
}


const AuthController = ({children}) => {

    const [ authState, authDispatch ] = useReducer(authReducer, inicialState)
    const [ autenticado, setAutenticado ] = useState(false);

    useEffect(() => {
        
    }, [])

    return (
        <AuthContext.Provider value={{authState, authDispatch, autenticado}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthController;