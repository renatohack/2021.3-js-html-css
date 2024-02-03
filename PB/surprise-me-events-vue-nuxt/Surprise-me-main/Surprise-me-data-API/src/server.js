const app = require('./app');

var PORT = 3030;
app.listen(PORT, () => {
  console.log(`Sistema rodando na Porta:${PORT}`);
})