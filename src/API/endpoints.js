const dados = require('./dados')

export default class Axios {

    get(rota) {

        switch(rota) {
            case '/dadosUsuario':
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(dados.users[0]);
                    }, Math.random() * 1000)
                });
            default:
                return {}
        }
    }

    post() {

    }

}