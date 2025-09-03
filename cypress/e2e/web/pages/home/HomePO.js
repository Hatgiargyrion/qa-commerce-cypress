class HomePO {
    elementos = {
        textoPrincipalHome: () => cy.get('h1').contains('Sua Melhor Experiência de Compra Está Aqui!')
    }
}
export default HomePO