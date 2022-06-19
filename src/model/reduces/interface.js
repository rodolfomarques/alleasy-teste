export default function interfaceReducer(state, action) {

    switch(action.type) {

        case 'logarUsuario':
            return {...state, logado: true}
        case 'deslogarUsuario':
            return {...state, logado: false}
        default:
            return state
            
    }
    
}