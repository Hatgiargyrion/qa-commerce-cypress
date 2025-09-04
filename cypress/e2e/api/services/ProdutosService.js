import RestRequests from '@support/RestRequests';

const PRODUTOS_PATH = '/produtos';

class ProdutosService extends RestRequests {
    buscarProdutoValido() {
        this.doGetRequest(PRODUTOS_PATH)
        cy.get('@response').then(resp => {
            const produtoEscolhido = Math.floor(Math.random() * resp.body.products.length)
            cy.wrap(resp.body.products[produtoEscolhido]).as('produtoEscolhido')
        })
    }
}

export default ProdutosService