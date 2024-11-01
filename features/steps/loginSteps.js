const { Given, When, Then } = require('@cucumber/cucumber');
const request = require('supertest');
const app = require('../../app');
const assert = require('assert');

Given('que o usuário está na página de login', function () {
  this.response = null;
});

When('o usuário insere {string} no campo de e-mail', function (email) {
  this.email = email;
});

When('o usuário insere {string} no campo de senha', function (senha) {
  this.senha = senha;
});

When('o usuário clica no botão {string}', async function () {
  this.response = await request(app)
    .post('/login')
    .send({ email: this.email, senha: this.senha });
});

Then('o sistema redireciona o usuário para a página inicial', function () {
  assert.strictEqual(this.response.status, 200);
});

Then('o sistema exibe a mensagem de erro "Credenciais incorretas"', function () {
  assert.strictEqual(this.response.status, 401);
});