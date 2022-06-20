import { useContext } from 'react';
import { AuthContext } from '../model/contextos';
import { Box, Popover, TextField, Button } from '@mui/material';
import Axios from '../API/endpoints';
const axios = new Axios();

const Login = ({ancoraMenuLogin, setAncoraMenuLogin}) => {

    const { authDispatch } = useContext(AuthContext);
    const abrir = Boolean(ancoraMenuLogin);

    const handleFecharLogin = () => {
        setAncoraMenuLogin(null);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let params = {
          email: data.get('email'),
          senha: data.get('senha'),
        };
        axios.post('/login', params)
        .then(resp => {
            authDispatch({type: 'inserirDadosUsuario', payload: resp.data})
            handleFecharLogin()
        })
        .catch(err => {console.log(err);})
    };

    return (
        <Popover
            id={'perfil'}
            open={abrir}
            anchorEl={ancoraMenuLogin}
            onClose={handleFecharLogin}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            sx={{mt: 2, mr: 1}}
        >

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, p:2, display: 'flex', flexDirection: 'column' }}>
                <TextField
                    margin="normal"
                    required
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    size='small'
                />
                <TextField
                    margin="normal"
                    required
                    name="senha"
                    label="senha"
                    type="password"
                    id="senha"
                    autoComplete="current-password"
                    size='small'
                />
                <Button type="submit" variant="contained"  sx={{ mt: 3, mb: 2 }} >Entrar </Button>
            </Box>
            
        </Popover>
    )
}

export default Login;