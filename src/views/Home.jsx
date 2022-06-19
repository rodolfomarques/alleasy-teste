import { useContext } from "react";
import { DataContext }  from '../model/contextos';

const Home = () => {

    const { dataState } = useContext(DataContext);

    return (
        <>
            <h1>Home</h1>
            <ol>
                {
                    dataState.produtos.map((produto, i) => {
                        return <li key={i}>{produto.titulo}</li>
                    })
                }
            </ol>
        </>
    )

}

export default Home;