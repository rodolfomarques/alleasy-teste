import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../model/contextos';
import { Box, Popover, Typography, Avatar, Link, Divider } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { format } from 'date-fns';

const Perfil = ({ancoraMenuPerfil, setAncoraMenuPerfil}) => {

    const { authState, dataDispatch } = useContext(AuthContext);
    let navigate = useNavigate();
    const abrir = Boolean(ancoraMenuPerfil);
    const linkSize = '14px';
    const linkWeight = '300'

    const handleFecharPerfil = () => {
        setAncoraMenuPerfil(null);
    };

    return (
        <Popover
            id={'perfil'}
            open={abrir}
            anchorEl={ancoraMenuPerfil}
            onClose={handleFecharPerfil}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            sx={{mt: 2, mr: 1}}
        >
            <Box component='article' sx={{p: 2, width: '320px', display: 'flex', justifyContent: 'space-between'}}>
                <Avatar sx={{width:'80px', height: '80px', fontSize: '2rem'}}>{`${authState.usuario.nome !== '' && authState.usuario.nome.split(' ')[0][0]}${authState.usuario.nome !== '' &&  authState.usuario.nome.split(' ')[1][0]}`}</Avatar>
                <Box component='section' sx={{display: 'flex', flexDirection: 'column'}}>
                    <Typography variant='subtitle1'>{authState.usuario.nome}</Typography>
                    <time datetime={`${authState.usuario.ultimoAcesso}`} >
                        <Typography variant='subtitle2' sx={{fontWeight: '400', color: '#a0a0a0'}}>Último Acesso: {format(new Date(), "dd/MM/yy HH:mm")}</Typography>
                    </time>
                    <Link sx={{color: '#000', mt: 1}} onClick={() => {navigate('/cadastro')}}><Typography variant='subtitle1' sx={{display: 'flex', alignItems: 'center', fontSize: linkSize, fontWeight: linkWeight}}>Alterar Cadastro</Typography></Link>
                    <Link href='#' sx={{color: '#000'}}><Typography variant='subtitle1' sx={{display: 'flex', alignItems: 'center', fontSize: linkSize, fontWeight: linkWeight}}>Alterar Senha</Typography></Link>
                </Box>
            </Box>
            <Divider />
            <Box sx={{pl: 2, pr: 2, pt: 1, pb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Link href='#' sx={{color: '#000'}}>
                    <Typography variant='subtitle1' sx={{display: 'flex', alignItems: 'center', fontSize: linkSize, fontWeight: linkWeight}} ><ForumIcon fontSize='small' sx={{mr: .5}} />Suporte Online</Typography>
                </Link>
                <Link href='' sx={{color: '#000'}} onClick={() => {dataDispatch({type: 'logout'})}}>
                    <Typography variant='subtitle1' sx={{display: 'flex', alignItems: 'center', fontSize: linkSize, fontWeight: linkWeight}}><ExitToAppIcon fontSize='small' sx={{mr: .5}} />Logout</Typography>
                </Link>
            </Box>
        </Popover>
    )
}

export default Perfil;