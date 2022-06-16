import { useState } from "react";
import { InterfaceContext } from "../model/contextos";
import Axios from '../API/endpoints';
const axios = new Axios();


const InterfaceController = ({children}) => {

    const [ produtos, setProdutos ] = useState([])


    return (
        <InterfaceContext.Provider value={produtos}>
            {children}
        </InterfaceContext.Provider>
    )
}

export default InterfaceController;