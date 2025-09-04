class HomePO {
    elementos = {
        textoPrincipalHome: () => cy.get('h1').contains('Sua Melhor Experiência de Compra Está Aqui!'),
        listBtnAdicionarAoCarrinho: () => cy.get('.btn.btn-primary.add-to-cart')
    }

    site = Cypress.env('site');
}
export default HomePO