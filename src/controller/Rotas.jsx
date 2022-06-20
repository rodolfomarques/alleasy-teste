import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import FormCadastro from "../views/FormCadastro";

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/cadastro' element={<FormCadastro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;