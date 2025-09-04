Feature: Usuário

  @HIGH @API @USUARIO @CT002
  Scenario: Registrar um novo usuário
    Given que gero informações aleatórias para cadastro de um usuário
    When envio a requisição para a API de criação de usuário
    Then deve ser exibida a mensagem "Usuário criado com sucesso." no corpo da resposta
    And é retornado o status code 201

  @HIGH @API @USUARIO @CT003
  Scenario: Impedir criação de usuário com email duplicado
    Given que gero informações aleatórias para cadastro de um usuário
    When realizo duas chamadas de criação de usuário utilizando os mesmos dados
    Then deve ser exibida a mensagem "Email já cadastrado." no corpo da resposta
    And é retornado o status code 400
