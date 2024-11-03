const { Given, When } = require('@cucumber/cucumber');
const request = require('supertest');
const app = require('../../app');

Given('que o usuário está na página de login', function () {
  this.response = null;
  this.email = null;
  this.senha = null;
});

When('o usuário insere {string} no campo de e-mail', function (email) {
  this.email = email;
});

When('o usuário insere {string} no campo de senha', function (senha) {
  this.senha = senha;
});

When('o usuário clica no botão {string}', async function (buttonText) {
  this.response = await request(app)
    .post('/login')
    .send({ email: this.email, senha: this.senha });
});
