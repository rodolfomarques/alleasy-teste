export default function interfaceReducer(state, action) {

    switch(action.type) {

        case 'logarUsuario':
            return {...state, logado: true}
        case 'deslogarUsuario':
            return {...state, logado: false}
        case 'ativarModoCompacto':
            return {...state, modoCompacto: true}
        case 'desativarModoCompacto':
            return {...state, modoCompacto: false}
        default:
            return state
            
    }
    
}