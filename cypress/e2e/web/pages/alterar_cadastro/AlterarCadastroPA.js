import AlterarCadastroPO from "./AlterarCadastroPO";

class AlterarCadastroPA extends AlterarCadastroPO {

    preencherCampos(isValid) {
        cy.gerarNomeAleatorio().then(nome => {
            this.elementos.fieldNome().type(nome)
        })

        cy.gerarEmailAleatorio(isValid).then(email => {
            this.elementos.fieldEmail().type(email)
        })

        cy.gerarSenhaValida().then(senha => {
            this.elementos.fieldSenha().type(senha)
        })
    }

    clicarAtualizar() {
        this.elementos.btnAtualizar().click();
    }

    validarMensagemSucesso(mensagem) {
        this.elementos.lblUsuarioAtualizado().should('contain', mensagem)
    }

    validarAtualizacaoNaoSucessedida() {
        this.elementos.lblUsuarioAtualizado().should('not.be.visible')
    }
}

export default AlterarCadastroPA