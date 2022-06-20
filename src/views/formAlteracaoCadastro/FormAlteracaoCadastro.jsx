import { useContext, useReducer, useEffect, useState } from 'react';
import { Box, Avatar, Grid, TextField, Button } from '@mui/material';
import { AuthContext } from '../../model/contextos'
import { gerenciadorFormulario } from './gerenciadorForm';
import { useSnackbar } from 'notistack';

const inicialState = {

    email: '',
    senha: '',
    novaSenha: '',
    erroNovaSenha: false,
    textoErroNovaSenha: '',
    confirmacaoSenha: '',
    erroConfirmacao: false,
    textoErroConfirmacao: ''

}

const FormCadastro = () => {

    const { authState, autenticado } = useContext(AuthContext);
    const [ formState, formDispatch ] = useReducer(gerenciadorFormulario, inicialState);
    const [ exibirForm, setExibirForm ] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const enviar = (event) => {
        event.preventDefault();
        if(formState.erroNovaSenha || formState.erroConfirmacao) {
            enqueueSnackbar('É preciso validar os campos antes de enviar', {variant:'error'})
        } else {
            enqueueSnackbar('Dados salvos com sucesso!', {variant:'success'})
        }
    };

    useEffect(() => {

        if(autenticado) {
            formDispatch({type: 'alterarEmail', payload: authState.usuario.email})
            setExibirForm(true);
        } else {
            setExibirForm(false);
        }

    }, [autenticado])

    if(exibirForm) {

        return (
            <Box component='section' sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width:'350px',
                        backgroundColor: '#fff',
                        p:3
                    }}
                >
                    <Avatar sx={{width:'100px', height: '100px', fontSize: '3rem', backgroundColor: '#6bafd4'}}>{`${authState.usuario.nome !== '' && authState.usuario.nome.split(' ')[0][0]}${authState.usuario.nome !== '' &&  authState.usuario.nome.split(' ')[1][0]}`}</Avatar>
                    <Box component="form" onSubmit={enviar} sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                    variant='standard'
                                    value={formState.email}
                                    type='email'
                                    onChange={ (e) => {
                                        let valor = e.target.value
                                        formDispatch({type: 'alterarEmail', payload: valor})
                                    }}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="senhaAtual"
                                    label="Senha"
                                    type="password"
                                    id="senhaAtual"
                                    autoComplete="password"
                                    variant='standard'
                                    value={formState.senha}
                                    onChange={ (e) => {
                                        formDispatch({type: 'alterarSenha', payload: e.target.value })
                                    }}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="senhaNova"
                                    label="Nova senha"
                                    type="password"
                                    id="senhaNova"
                                    autoComplete="new-password"
                                    variant='standard'
                                    value={formState.novaSenha}
                                    onChange={ (e) => {
                                        formDispatch({type: 'alterarNovaSenha', payload: e.target.value })
                                    }}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    error={formState.erroNovaSenha}
                                    helperText={formState.erroNovaSenha && formState.textoErroNovaSenha}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmacaoSenha"
                                    label="Confirme sua nova senha"
                                    type="password"
                                    id="confirmacaoSenha"
                                    autoComplete="new-password"
                                    variant='standard'
                                    value={formState.confirmacaoSenha}
                                    onChange={ (e) => {
                                        formDispatch({type: 'alterarConfirmacao', payload: e.target.value })
                                    }}
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    error={formState.erroConfirmacao}
                                    helperText={formState.erroConfirmacao && formState.textoErroConfirmacao}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                            Salvar
                        </Button>
                    </Box>
                </Box>
            </Box>
        )

    } else {

        return (
            <Box component='section' sx={{width: '100%'}}>
                <h3>É preciso logar para ter acesso ao formulário</h3>
                <p>email: joaosilva@gmail.com</p>
                <p>senha: 1234</p>
            </Box>
        )
    }

}

export default FormCadastro;