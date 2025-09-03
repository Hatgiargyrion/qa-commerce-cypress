import HomePO from "./HomePO";

class HomePA extends HomePO {

    acessarWebsite() {
        cy.visit('http://localhost:3000/')
        this.elementos.textoPrincipalHome().should('be.visible')
    }

}

export default HomePA