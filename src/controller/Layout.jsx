import { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { InterfaceContext } from '../model/contextos';
import Header from '../componentesLayout/Header';
import Sidebar from '../componentesLayout/Sidebar';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Layout = ({children}) => {

    const [ abrir, setAbrir ] = useState(false);
    const { menuSempreAberto } = useContext(InterfaceContext);

    const abrirBarraLateral = () => { setAbrir(true) };
    const fecharBarraLateral = () => { setAbrir(false) };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header open={abrir} />
            <Sidebar 
                open={menuSempreAberto? true: abrir} 
                handleDrawerClose={menuSempreAberto? () => {}: fecharBarraLateral} 
                handleDrawerOpen={menuSempreAberto? () => {}: abrirBarraLateral} 
            />
            <Box component="main" sx={{ p: 3, backgroundColor: '#eee' }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    )

}

export default Layout;