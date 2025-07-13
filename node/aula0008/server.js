const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

// req.params vem do path params na URL, exemplo: meusite.com/id
// req.query vem do query params na URL, exemplo: meusite.com/?id=exemplo
// req.body vem do corpo de uma requisição de um post,put, patch. Geralmente formulários.

// Exemplo de query params/string
// É um par chave/valor e começa com o símbolo de ? na URL, seguido pela chave=valor
// https://www.site.com.br/perfil/david?campanha=googleads&nome_campanha=promocao

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        Idade do cliente: <input type="number" name="idade">
        <button>Enviar</button>
        </form>
        `);
});

app.post('/', (req, res) => {
    console.log(req.body);  // Para conseguir obter o corpo da requisição POST pelo express, é necessário usar o app.use(express.urlencoded({ extended: true }));
    res.status(300);  // Pode-se manipular o status code da response
    res.send(`O que você me enviou foi ${req.body.nome} e ${req.body.idade}`);
});

app.get('/testes/perfil', (req, res) => {
    res.send('Seja bem vindo a rota perfil');
});

// Criando um path param
app.get('/testes/perfil/:idUsuario', (req, res) => {  // :idUsuario é o path param do req.params
    console.log(req.params, req.query);  // params é o path params e o query é o query params
    // res.send(req.query);
    // res.send(req.params);

    const idade = req.query.idade;

    if (!idade) {
        res.send('Você não passou o query params idade.')
    }

    if (req.query.idade >= 18 && req.query.sexo === 'masculino') {
        console.log('Maior de idade! e MACHO!');
        res.send('Oi')
    }
});



app.listen(3000, () => {
    console.log('http://localhost:3000');
    
});