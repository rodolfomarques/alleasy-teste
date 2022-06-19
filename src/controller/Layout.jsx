import {useState} from 'react';
import { styled } from '@mui/material/styles';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
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

    const [abrir, setAbrir] = useState(false);
    const menuSempreAberto = useMediaQuery('(min-width: 1280px)')

    const abrirBarraLateral = () => {
        setAbrir(true);
    };
    
    const fecharBarraLateral = () => {
        setAbrir(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header open={abrir} />
            <Sidebar open={menuSempreAberto? true: abrir} handleDrawerClose={menuSempreAberto? () => {}: fecharBarraLateral} handleDrawerOpen={menuSempreAberto? () => {}: abrirBarraLateral} />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    )

}

export default Layout;