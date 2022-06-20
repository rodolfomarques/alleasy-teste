import { useState, useEffect, useReducer } from "react";
import { AuthContext } from "../model/contextos";
import { authReducer } from "../model/reduces";

const inicialState = { 
    usuario: {
        nome: '',
        ultimoAcesso: ''
    },
    autenticado: false
}


const AuthController = ({children}) => {

    const [ authState, authDispatch ] = useReducer(authReducer, inicialState);
    const [ autenticado, setAutenticado ] = useState(false);

    useEffect(() => {
        if(authState.autenticado) {
            setAutenticado(true);
        } else {
            setAutenticado(false);
        }
    }, [authState])

    return (
        <AuthContext.Provider value={{authState, authDispatch, autenticado}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthController;