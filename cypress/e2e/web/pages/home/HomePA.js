import HomePO from "./HomePO";

class HomePA extends HomePO {

    acessarWebsite() {
        cy.visit('http://localhost:3000/')
        this.elementos.textoPrincipalHome().should('be.visible')
    }

    adicionarProdutoCarrinho() {
        this.elementos.listBtnAdicionarAoCarrinho().then(listaElementos => {
            const produtoAleatorio = Math.floor(Math.random() * listaElementos.length);
            this.elementos.listBtnAdicionarAoCarrinho().eq(produtoAleatorio).click({ force: true })
        })
    }
}

export default HomePA