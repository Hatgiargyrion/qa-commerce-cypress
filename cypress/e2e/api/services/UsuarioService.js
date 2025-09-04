import RestRequests from '@support/RestRequests';

const USER_PATH = '/users'

class UsuarioService extends RestRequests {

    gerarDadosAleatoriosUsuario() {
        cy.gerarNomeAleatorio().then(nome => {
            cy.gerarEmailAleatorio(true).then(email => {
                cy.gerarSenhaValida().then(senha => {
                    const body = {
                        'name': nome,
                        'email': email,
                        'password': senha,
                        'isAdmin': false
                    };
                    cy.wrap(body).as('credenciaisUsuario')
                });
            });
        });
    }

    criarUsuario() {
        cy.get('@credenciaisUsuario').then(bodyCredenciais => {
            this.doPostRequestWithBody(bodyCredenciais, USER_PATH);
        })
    }

}
export default UsuarioService