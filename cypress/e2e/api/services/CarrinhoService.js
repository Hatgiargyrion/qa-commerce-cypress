import RestRequests from '@support/RestRequests';

const CARRINHO_PATH = '/carrinho';

class CarrinhoService extends RestRequests {
    adicionarProdutoAoCarrinho() {
        cy.get('@produtoEscolhido').then(produto => {
            const body = {
                productId: produto.id,
                quantity: 1
            }
            this.doPostRequestWithBody(body, CARRINHO_PATH)
        })
    }
}

export default CarrinhoService