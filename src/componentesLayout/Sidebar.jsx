import { styled } from '@mui/material/styles';
import { Toolbar, List, ListItemButton, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { Home, Storage, AttachMoney, ShoppingCart, Public, Sell, Help } from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    color: '#fff',
    backgroundColor: '#666',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
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
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const linksMenu = [
    {titulo: 'Home', icone: <Home />},
    {titulo: 'Lorem Ipsum', icone: <Storage />},
    {titulo: 'Lorem Ipsum', icone: <AttachMoney />},
    {titulo: 'Lorem Ipsum', icone: <ShoppingCart />},
    {titulo: 'Lorem Ipsum', icone: <Public />},
    {titulo: 'Lorem Ipsum', icone: <Sell />},
    {titulo: 'Lorem Ipsum', icone: <Help />},
]


const Sidebar = ({open, handleDrawerOpen, handleDrawerClose }) => {

    return (
        <aside>
            <Drawer component='aside' variant="permanent" open={open} onMouseOver={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
                <Toolbar />
                <List>
                    {linksMenu.map((link, i) => (
                        <ListItem key={`item-menu-${i}`} disablePadding sx={{ display: 'block', }}>
                            <ListItemButton
                                sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                                }}
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
            </Drawer>
        </aside>
    );

}

export default Sidebar;