export default function authReducer(state, action) {

    switch(action.type) {
        case 'inserirDadosUsuario':
            return {...state, usuario: action.payload}
        default:
            return state
    }
    
}