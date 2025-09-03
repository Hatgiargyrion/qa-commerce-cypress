import MinhaContaPO from "./MinhaContaPO";

class MinhaContaPA extends MinhaContaPO {

    acessarAtualizarCadastro() {
        this.elementos.btnAtualizarCadastro().click()
    }
}

export default MinhaContaPA