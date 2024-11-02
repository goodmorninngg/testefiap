const request = require('supertest');
const app = require('../app');
const Ajv = require('ajv');
const ajv = new Ajv();

const loginSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "token": {
      "type": "string"
    }
  },
  "required": ["token"]
};

describe('Teste da API de Login', () => {
  it('Deve retornar status 200 e token para credenciais válidas', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'email@algumacoisa.com', senha: 'senhaaa12312' });
    
    expect(res.statusCode).toEqual(200);
    
    const validate = ajv.compile(loginSchema);
    const valid = validate(res.body);
    
    expect(valid).toBe(true);
    if (!valid) console.log(validate.errors);
  });

  it('Deve retornar status 400 para campo de e-mail vazio', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: '', senha: 'senhaaa12312' });
    
    expect(res.statusCode).toEqual(400);
  });

  it('Deve retornar status 400 para e-mail em formato incorreto', async () => {
    const res = await request(app)
      .post('/login')
      .send({ email: 'emailincorreto', senha: '123' });
    
    expect(res.statusCode).toEqual(400);
  });
});
