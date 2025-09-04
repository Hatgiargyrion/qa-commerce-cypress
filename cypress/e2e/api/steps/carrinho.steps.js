import { When } from '@badeball/cypress-cucumber-preprocessor';
import CarrinhoService from '../services/CarrinhoService';

const carrinhoService = new CarrinhoService()

When('adiciono esse produto ao carrinho de compras', () => {
    carrinhoService.adicionarProdutoAoCarrinho();
})