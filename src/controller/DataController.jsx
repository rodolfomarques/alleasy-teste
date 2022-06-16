import { useState } from "react";
import { DataContext } from "../model/contextos";
import Axios from '../API/endpoints';
const axios = new Axios();


const DataController = ({children}) => {

    const [ produtos, setProdutos ] = useState([])


    return (
        <DataContext.Provider value={produtos}>
            {children}
        </DataContext.Provider>
    )
}

export default DataController;