Feature: Autenticação de Usuário

Scenario: Login com credenciais válidas
  Given que o usuário está na página de login
  And o usuário insere "email@algumacoisa.com" no campo de e-mail
  And o usuário insere "senhaaa12312" no campo de senha
  When o usuário clica no botão "Entrar"
  Then o sistema redireciona o usuário para a página inicial

Scenario: Login com senha incorreta
  Given que o usuário está na página de login
  And o usuário insere "email@algumacoisa" no campo de e-mail
  And o usuário insere "senhaerrada" no campo de senha
  When o usuário clica no botão "Entrar"
  Then o sistema exibe a mensagem de erro "Credenciais incorretas"