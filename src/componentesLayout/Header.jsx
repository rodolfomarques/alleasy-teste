import { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { Toolbar, Box, IconButton, Avatar, Container, Button, Typography } from '@mui/material';
import { AuthContext } from '../model/contextos';
import MuiAppBar from '@mui/material/AppBar';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from './images/logo-site.png'
import Perfil from './Perfil';
import Login from './Login';

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })(({ theme, open }) => ({
    color: '#999',
    backgroundColor: "#fff",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
}));

const Header = ({open}) => {

    const [ancoraMenuPerfil, setAncoraMenuPerfil] = useState(null);
    const [ancoraMenuLogin, setAncoraMenuLogin] = useState(null);
    const { autenticado, authState } = useContext(AuthContext);

    const handleAbrirPerfil = (event) => {
        setAncoraMenuPerfil(event.currentTarget);
    };

    const handleAbrirLogin = (event) => {
        setAncoraMenuLogin(event.currentTarget);
    };
    
    return (
        <AppBar position="fixed" open={open}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <img src={logo} alt='Mercado Eletrônico' />
                    <Box component='section' sx={{ flexGrow: 0 }}>
                        {!autenticado && <Button variant="contained" sx={{mr:1}} onClick={handleAbrirLogin}>Login</Button>}
                        {!autenticado && <Button variant="outlined" onClick={() => (window.location.assign('/cadastro'))} >Cadastrar</Button>}
                        {
                            autenticado && (
                                <Box component='article' sx={{display: 'flex'}}>
                                    <Avatar sx={{mr: 1}} >{`${authState.usuario.nome.split(' ')[0][0]}${authState.usuario.nome.split(' ')[1][0]}`}</Avatar>
                                    <Box>
                                        <Typography variant='subtitle2' >Bem vindo,</Typography>
                                        <Typography variant='subtitle1' sx={{color: '#000', lineHeight:0.6,}}>{authState.usuario.nome}</Typography>
                                    </Box>
                                    <IconButton onClick={handleAbrirPerfil}>
                                        <ArrowDropDownIcon />
                                    </IconButton>
                                </Box>
                            )
                        }
                        <Perfil ancoraMenuPerfil={ancoraMenuPerfil} setAncoraMenuPerfil={setAncoraMenuPerfil} />
                        <Login ancoraMenuLogin={ancoraMenuLogin} setAncoraMenuLogin={setAncoraMenuLogin} />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;