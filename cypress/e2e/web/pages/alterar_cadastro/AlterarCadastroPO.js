class AlterarCadastroPO {
    elementos = {
        fieldNome: () => cy.get('#name'),
        fieldEmail: () => cy.get('#email'),
        fieldSenha: () => cy.get('#password'),
        btnAtualizar: () => cy.get('.btn.btn-primary'),
        lblUsuarioAtualizado: () => cy.get('#message')
    }
}

export default AlterarCadastroPO