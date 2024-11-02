const express = require('express');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'O campo de e-mail não pode estar vazio.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Formato de e-mail inválido.' });
  }

  if (email === 'email@algumacoisa.com' && senha === 'senhaaa12312') {
    res.status(200).json({ token: 'token-gerado' });
  } else {
    res.status(401).json({ error: 'Credenciais incorretas' });
  }
});

module.exports = app;
