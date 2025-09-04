import { Given } from '@badeball/cypress-cucumber-preprocessor';
import ProdutosService from '../services/ProdutosService';

const produtosService = new ProdutosService();

Given('que pesquiso um produto disponível na lista de produtos', () => {
    produtosService.buscarProdutoValido();
})