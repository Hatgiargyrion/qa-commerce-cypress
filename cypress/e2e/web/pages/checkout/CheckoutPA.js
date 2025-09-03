import CheckoutPO from "./CheckoutPO";

class CheckoutPA extends CheckoutPO {

    preencherCamposObrigatorios() {
        this.elementos.fieldNome().type('teste', { force: true });
        this.elementos.fieldSobrenome().type('som', { force: true });
        this.elementos.fieldEndereço().type('testesom testesom testesom', { force: true });
        this.elementos.fieldNumero().type('777', { force: true });
        this.elementos.fieldCEP().type('12345678', { force: true });
        this.elementos.fieldTelefone().type('1140028922', { force: true });
        this.elementos.fieldEmail().type('testesom@testesom.com', { force: true });

    }

    escolherPagamento(metodoPagamento) {
        this.elementos.listRadiosformPagamento().contains(metodoPagamento).siblings('input').click({ force: true })
    }

    aceitarTermosECondicoes() {
        this.elementos.checkBoxAceiteTermos().click({ force: true })
    }

    finalizarPedido() {
        this.elementos.btnFinalizarPedido().click({ force: true })
    }

    validarStatusDoPedido() {
        this.elementos.lblStatusDoPedido().should('be.visible');
        this.elementos.lblPagamentoAprovado().should('be.visible');
    }

    validarErroCheckboxTermos() {
        this.elementos.checkBoxAceiteTermos()
            .siblings('.invalid-feedback')
            .contains('Este campo é obrigatório.')
            .should('be.visible')
    }
}
export default CheckoutPA