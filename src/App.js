import './App.css';
import AuthController from './controller/AuthController';
import DataController from './controller/DataController';
import InterfaceController from './controller/InterfaceController';
import Rotas from './controller/Rotas';
import { SnackbarProvider } from 'notistack';


function App() {
    return (
        <AuthController>
            <DataController>
                <InterfaceController>
                    <SnackbarProvider maxSnack={3}>
                        <Rotas />
                    </SnackbarProvider>
                </InterfaceController>
            </DataController>
        </AuthController>
    );
}

export default App;
