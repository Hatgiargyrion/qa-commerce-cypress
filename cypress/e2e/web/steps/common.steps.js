import { When } from '@badeball/cypress-cucumber-preprocessor';
import CommonPA from '../pages/common/CommonPA';

const commonPA = new CommonPA();

When('acesso o Submenu {string}', (submenu) => {
    commonPA.acessarSubmenuComTexto(submenu)
})