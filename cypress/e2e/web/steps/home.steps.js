import { Given, When } from '@badeball/cypress-cucumber-preprocessor';
import HomePA from '../pages/home/HomePA';

const homePA = new HomePA();

Given('que estou na página inicial do portal QA-Commerce', () => {
    homePA.acessarWebsite()
})

When('adiciono um item ao carrinho', () => {
    homePA.adicionarProdutoCarrinho()
})