import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CheckoutPA from '../pages/checkout/CheckoutPA';

const checkoutPA = new CheckoutPA();

When('preencho todos os campos obrigatórios', () => {
    checkoutPA.preencherCamposObrigatorios()
})

When('seleciono o método de pagamento {string}', (metodoPagamento) => {
    checkoutPA.escolherPagamento(metodoPagamento)
})

When('marco a opção de termos e condições', () => {
    checkoutPA.aceitarTermosECondicoes()
})

When('concluo o pedido', () => {
    checkoutPA.finalizarPedido()
})

Then('devo ser direcionado para a página de status do pedido com pagamento aprovado', () => {
    checkoutPA.validarStatusDoPedido();
})

Then('deve ser exibida uma mensagem de erro do checkbox de termos', () => {
    checkoutPA.validarErroCheckboxTermos();
})
