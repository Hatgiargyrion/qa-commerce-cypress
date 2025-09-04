Feature: Processo de Checkout

    Background: Navegando até o checkout
        Given que estou na página inicial do portal QA-Commerce
        And adiciono um item ao carrinho
        And acesso o Submenu "Carrinho"
        And sigo para a página de Checkout

    @HIGH @WEB @CHECKOUT @CT006
    Scenario: Finalizar checkout com sucesso
        When preencho todos os campos obrigatórios
        And seleciono o método de pagamento "Boleto"
        And marco a opção de termos e condições
        And concluo o pedido
        Then devo ser direcionado para a página de status do pedido com pagamento aprovado

    @HIGH @WEB @CHECKOUT @CT007
    Scenario: Finalizar checkout sem aceitar os termos
        When preencho todos os campos obrigatórios
        And seleciono o método de pagamento "Pix"
        And concluo o pedido
        Then deve aparecer a mensagem de erro "Este campo é obrigatório."
