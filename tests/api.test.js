const request = require('supertest');
const app = require('../app');

describe('Teste da API de Login', () => {
  it('Deve retornar status 200 e token para credenciais válidas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'email@algumacoisa.com', senha: 'senhaaa12312' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('Deve retornar status 400 para campo de e-mail vazio', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: '', senha: 'senhaaa12312' });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'O campo de e-mail não pode estar vazio.');
  });

  it('Deve retornar status 400 para e-mail em formato incorreto', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'emailincorreto', senha: '123' });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Formato de e-mail inválido.');
  });
});
