import express from 'express';

const app = express();
const port = 3000; //Porta que a aplicação está rodando

app.get('/', (request, response) => response.send(`Aplicação rodando na porta: ${port}`));

app.listen(port);