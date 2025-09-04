Feature: Carrinho

  Scenario: Inclusão de produto no carrinho
    Given que pesquiso um produto disponível na lista de produtos
    When adiciono esse produto ao carrinho de compras
    Then deve ser exibida a mensagem "Produto adicionado ao carrinho com sucesso." no corpo da resposta
    And é retornado o status code 201