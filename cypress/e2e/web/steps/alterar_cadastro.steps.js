import { When } from '@badeball/cypress-cucumber-preprocessor';
import AtualizacaoCadastralPA from '../pages/alterar_cadastro/AlterarCadastroPA';

const atualizacaoCadastralPA = new AtualizacaoCadastralPA();

When('preencho todos os campos com informações atualizadas', () => {
    atualizacaoCadastralPA.preencherCampos(true)
})

When('confirmo clicando no botão Atualizar', () => {
    atualizacaoCadastralPA.clicarAtualizar()
})

When('insiro apenas o campo Email com valor fora do padrão aceito', () => {
    atualizacaoCadastralPA.preencherCampos(false)
})

When('a atualização não deve ser realizada', () => {
    atualizacaoCadastralPA.validarAtualizacaoNaoSucessedida()
})