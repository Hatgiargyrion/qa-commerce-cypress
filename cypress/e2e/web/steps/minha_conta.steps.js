import { When } from '@badeball/cypress-cucumber-preprocessor';
import MinhaContaPA from '../pages/minha_conta/MinhaContaPA';

const minhaContaPA = new MinhaContaPA();

When('entro na seção Atualizar Cadastro', () => {
    minhaContaPA.acessarAtualizarCadastro()
})
