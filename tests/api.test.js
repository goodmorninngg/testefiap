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

  it('Deve retornar status 401 para credenciais inválidas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'email@algumacoisa.com', senha: 'senhaerrada' });
    expect(res.statusCode).toEqual(401);
  });
});