import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../views/Home";
import FormCadastro from "../views/formAlteracaoCadastro/FormAlteracaoCadastro";

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='cadastro' element={<FormCadastro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;