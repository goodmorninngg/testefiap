const express = require('express');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { email, senha } = req.body;
  if (email === 'email@algumacoisa.com' && senha === 'senhaaa12312') {
    res.status(200).json({ token: 'token-gerado' });
  } else {
    res.status(401).json({ error: 'Credenciais incorretas' });
  }
});

module.exports = app;