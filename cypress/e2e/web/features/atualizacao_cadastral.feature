Feature: Alteração de dados cadastrais

    Background: Navegar até a área de atualização
        Given que estou na página inicial do portal QA-Commerce
        And acesso o Submenu "Minha Conta"
        And efetuo login utilizando credenciais de admim
        And entro na seção Atualizar Cadastro

    Scenario: Alterar informações do cadastro com sucesso
        When preencho todos os campos com informações atualizadas
        And confirmo clicando no botão Atualizar
        Then deve aparecer a mensagem de sucesso "Usuário atualizado com sucesso!"

    Scenario: Tentativa de atualização com email inválido
        When insiro apenas o campo Email com valor fora do padrão aceito
        And confirmo clicando no botão Atualizar
        Then a atualização não deve ser realizada