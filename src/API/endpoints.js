// Fake API simulando chamada com Axios
const dados = require('./dados')

export default class Axios {

    retorno(resposta) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({status: 200, data: resposta});
            }, Math.random() * 1000)
        });
    }

    retornoLogin(params) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let usuario = dados.users.find((usuario) => { if(params.email === usuario.email) {return true} else {return false} })
                if(!usuario) {reject({status: 400, data: 'Usuário não encontrado.'})}
                else if(usuario.senha !== params.senha) {reject({status: 400, data: 'Senha incorreta.'})}
                else {
                    let dadosUsuario = {
                        nome: usuario.nome,
                        ultimo_acesso: usuario.ultimo_acesso,
                        email: usuario.email,
                    }
                    resolve({status: 200, data: {...dadosUsuario}})
                }
            }, Math.random() * 1000)
        })
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

    post(rota, params) {

        switch(rota) {
            case '/login':
                return this.retornoLogin(params);
            default:
                return {}
        }
    }

}