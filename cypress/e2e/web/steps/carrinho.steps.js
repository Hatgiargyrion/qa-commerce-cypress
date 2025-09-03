import { When } from '@badeball/cypress-cucumber-preprocessor';
import CarrinhoPA from '../pages/carrinho/CarrinhoPA';

const carrinhoPA = new CarrinhoPA()

When('sigo para a página de Checkout', () => {
    carrinhoPA.irParaCheckout()
})