// Fake API simulando chamada com Axios
const dados = require('./dados')

export default class Axios {

    retorno(resposta) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(resposta);
            }, Math.random() * 1000)
        });
    }

    get(rota) {

        switch(rota) {
            case '/dadosUsuario':
                return this.retorno(dados.users[0]);
            case '/produtos':
                return this.retorno(dados.products);
            case '/imagensCarrossel':
                return this.retorno(dados.banner);
            default:
                return {}
        }
    }

    post() {

    }

}