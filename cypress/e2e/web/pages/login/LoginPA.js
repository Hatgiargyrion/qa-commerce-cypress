import LoginPO from "./LoginPO";

class LoginPA extends LoginPO {

    realizarLoginComAdmin() {
        cy.fixture('massas/logins.json').then((login) => {
        this.elementos.fieldEmail().type(login.loginSemProdutoComprado.email)
        this.elementos.fieldSenha().type(login.loginSemProdutoComprado.senha)
        this.elementos.btnEntrar().click()
      });
    }
}

export default LoginPA