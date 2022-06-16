import './App.css';
import AuthController from './controller/AuthController';
import DataController from './controller/DataController';
import InterfaceController from './controller/InterfaceController';
import Rotas from './controller/Rotas';

function App() {
    return (
        <AuthController>
            <DataController>
                <InterfaceController>
                    <Rotas />
                </InterfaceController>
            </DataController>
        </AuthController>
    );
}

export default App;
