import { useReducer, useEffect, useContext } from "react";
import { InterfaceContext, AuthContext } from "../model/contextos";
import { interfaceReducer } from "../model/reduces";
import Axios from '../API/endpoints';
const axios = new Axios();

const inicialState = {
    logado: false,
    modoCompacto: false
}


const InterfaceController = ({children}) => {

    const [ interfaceState, interfaceDispatch ] = useReducer(interfaceReducer, inicialState);
    const { autenticado } = useContext(AuthContext);

    useEffect(() => {
        
        if(autenticado) {
            interfaceDispatch({type: 'logarUsuario'})
        }

    },[autenticado])

    return (
        <InterfaceContext.Provider value={{interfaceState, interfaceDispatch}}>
            {children}
        </InterfaceContext.Provider>
    )
}

export default InterfaceController;