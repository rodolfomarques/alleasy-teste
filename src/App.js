import './App.css';
import AuthController from './controller/AuthController';
import DataController from './controller/DataController';
import InterfaceController from './controller/InterfaceController';
import Layout from './controller/Layout';
import Rotas from './controller/Rotas';

function App() {
    return (
        <AuthController>
            <DataController>
                <InterfaceController>
                    <Layout>
                        <Rotas />
                    </Layout>
                </InterfaceController>
            </DataController>
        </AuthController>
    );
}

export default App;
