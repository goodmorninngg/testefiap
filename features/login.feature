# features/login.feature
Feature: Login

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    And o usuário insere "email@algumacoisa.com" no campo de e-mail
    And o usuário insere "senhaaa12312" no campo de senha
    When o usuário clica no botão "Entrar"
