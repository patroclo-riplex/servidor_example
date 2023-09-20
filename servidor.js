const http = require('http');
const chalk = require('chalk');

const HOST = 'localhost';
const PORT = 8000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const response = JSON.stringify({ nombre: 'Gustavo Castro', mensaje: 'Hola desde mi servidor en Node.js' });
  res.end(response);
});

server.listen(PORT, () => {
  console.log(chalk.green(`Servidor corriendo en http://${HOST}:${PORT}/`));
});
