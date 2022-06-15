import logo from './logo.svg';
import './App.css';
import Axios from './API/endpoints';
const axios = new Axios()


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
        onClick={async () => { await axios.get('/dadosUsuario').then(resp => {console.log(resp);});}}
        >
            Testes
        </button>
      </header>
    </div>
  );
}

export default App;
