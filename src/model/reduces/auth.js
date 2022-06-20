export default function authReducer(state, action) {

    switch(action.type) {
        case 'inserirDadosUsuario':
            return {...state, usuario: action.payload, autenticado: true}
        case 'logout':
            return {...state, autenticado: false}
        default:
            return state
    }
    
}