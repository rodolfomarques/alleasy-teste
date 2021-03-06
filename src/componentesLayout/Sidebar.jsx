import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Toolbar, List, ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import { Home, Storage, AttachMoney, ShoppingCart, Public, Sell, Help } from '@mui/icons-material';
import MuiDrawer from '@mui/material/Drawer';

const larguraSidebar = 240;

const estiloSidebarAberta = (theme) => ({
    color: '#fff',
    backgroundColor: '#666',
    width: larguraSidebar,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const estiloSidebarFechada = (theme) => ({
    color: '#fff',
    backgroundColor: '#666',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: larguraSidebar,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...estiloSidebarAberta(theme),
            '& .MuiDrawer-paper': estiloSidebarAberta(theme),
        }),
        ...(!open && {
            ...estiloSidebarFechada(theme),
            '& .MuiDrawer-paper': estiloSidebarFechada(theme),
        }),
    }),
);

const linksMenu = [
    {titulo: 'Home', icone: <Home />, onClick: '/'},
    {titulo: 'Lorem Ipsum', icone: <Storage />, onClick: ''},
    {titulo: 'Lorem Ipsum', icone: <AttachMoney />, onClick: ''},
    {titulo: 'Lorem Ipsum', icone: <ShoppingCart />, onClick: ''},
    {titulo: 'Lorem Ipsum', icone: <Public />, onClick: ''},
    {titulo: 'Lorem Ipsum', icone: <Sell />, onClick: ''},
    {titulo: 'Lorem Ipsum', icone: <Help />, onClick: ''},
]


const Sidebar = ({open, handleDrawerOpen, handleDrawerClose }) => {

    let navigate = useNavigate()

    return (
        <aside>
            <Drawer variant="permanent" open={open} onMouseOver={handleDrawerOpen} onMouseLeave={handleDrawerClose} >
                <Toolbar />
                <nav>
                    <List>
                        {linksMenu.map((link, i) => (
                            <ListItem key={`item-menu-${i}`} disablePadding sx={{ display: 'block', }}>
                                <ListItemButton
                                    sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    }}
                                    onClick={() => {navigate(link.onClick)}}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                            color: '#fff' 
                                        }}
                                    >
                                        {link.icone}
                                    </ListItemIcon>
                                    <ListItemText primary={link.titulo} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </nav>
            </Drawer>
        </aside>
    );

}

export default Sidebar;