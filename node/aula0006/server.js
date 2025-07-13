const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//           POST,  GET,   PUT,  DELETE -> Métodos HTTP

// ROTA
// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre

app.get('/', (req, res) => {  // A mesma rota pode possuir métodos HTTP diferentes
    res.send(`
        <form action="/" method="POST">
        Nome: <input type ="text" name="nome">
        <button>Enviar</button>
        </form>
        `);
});

app.post('/', (req, res) => {  // A mesma rota pode possuir métodos HTTP diferentes
    res.send('recebi o formulário');
    
})

app.get('/contato', (req, res) => {
    res.send('obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
    console.log('acessar http://localhost:3000');
    console.log('servidor escutando na porta 3000...');
});