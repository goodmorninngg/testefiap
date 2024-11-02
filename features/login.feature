# features/login.feature
Feature: Login

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    And o usuário insere "email@algumacoisa.com" no campo de e-mail
    And o usuário insere "senhaaa12312" no campo de senha
    When o usuário clica no botão "Entrar"

  Scenario: Login com campo de e-mail vazio
    Given que o usuário está na página de login
    And o usuário insere "" no campo de e-mail
    And o usuário insere "senhaaa12312" no campo de senha
    When o usuário clica no botão "Entrar"

  Scenario: Login com senha e e-mail em formato incorreto
    Given que o usuário está na página de login
    And o usuário insere "emailincorreto" no campo de e-mail
    And o usuário insere "123" no campo de senha
    When o usuário clica no botão "Entrar"
