import { When } from '@badeball/cypress-cucumber-preprocessor';
import LoginPA from '../pages/login/LoginPA';

const loginPA = new LoginPA();

When('efetuo login utilizando credenciais de admim', () => {
    loginPA.realizarLoginComAdmin()
})