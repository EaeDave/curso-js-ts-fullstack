const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Olá, Mundo!</h1>');
});

app.listen(3000, () => {
    console.log('Acesse http://localhost:3000');
    console.log('Servidor escutando na porta 3000....');
});