export function gerenciadorFormulario (state, action) {

    switch(action.type) {
        case 'alterarEmail':
            return {...state, email: action.payload, erroEmail: false}
        case 'alterarSenha':
            return {...state, senha: action.payload}
        case 'alterarNovaSenha':
            let novaSenha = action.payload
            if(novaSenha.length < 3) { return {...state, novaSenha, erroNovaSenha: true, textoErroNovaSenha: 'Insira uma senha maior que três caracteres.'}} 
            if(novaSenha.length > 13) { return {...state, novaSenha, erroNovaSenha: true, textoErroNovaSenha: 'Insira uma senha menor que 13 caracteres.'}} 
            if(!/[0-9]/.test(novaSenha)) {return {...state, novaSenha, erroNovaSenha: true, textoErroNovaSenha: 'Insira pelo menos um número.'}}
            if(!/[A-Za-z]/.test(novaSenha)) {return {...state, novaSenha, erroNovaSenha: true, textoErroNovaSenha: 'Insira pelo menos uma letra.'}}
            if(!/[^a-zA-Z 0-9]+/g.test(novaSenha)) {return {...state, novaSenha, erroNovaSenha: true, textoErroNovaSenha: 'Insira algum caractere especial.'}}
            return {...state, novaSenha: action.payload, erroNovaSenha: false}
        case 'alterarConfirmacao':
            if (action.payload !== state.novaSenha) {
                return {...state, confirmacaoSenha: action.payload, erroConfirmacao: true, textoErroConfirmacao: 'Não confere com a nova senha.'}
            }
            return {...state, confirmacaoSenha: action.payload, erroConfirmacao: false}
        default:
            return state
    }

}