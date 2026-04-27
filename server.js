const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res.json({ mensagem: "Olá do meu próprio Container Docker!", status: "Sucesso" });
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});