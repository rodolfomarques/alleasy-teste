import { useReducer, useEffect, useContext } from "react";
import { InterfaceContext, AuthContext } from "../model/contextos";
import { interfaceReducer } from "../model/reduces";
import { useMediaQuery } from '@mui/material';


const inicialState = {
    logado: false
}

const InterfaceController = ({children}) => {

    const [ interfaceState, interfaceDispatch ] = useReducer(interfaceReducer, inicialState);
    const { autenticado } = useContext(AuthContext);
    const menuSempreAberto = useMediaQuery('(min-width: 1280px)')

    useEffect(() => {
        
        if(autenticado) { interfaceDispatch({type: 'logarUsuario'}) }

    },[autenticado])

    return (
        <InterfaceContext.Provider value={{interfaceState, interfaceDispatch, menuSempreAberto}}>
            {children}
        </InterfaceContext.Provider>
    )
}

export default InterfaceController;