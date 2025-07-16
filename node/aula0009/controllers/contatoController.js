exports.paginaInicial = (req, res) => {
    res.send(`
        <h1>Bem vindo!</h1>
        <ol>
            <li>Nome: "David"
            <li>Idade: 23
            <li>Telefone: (xx)xxxxx-xxxx
        </ol>

        <form action="/contato" method="post">
            <label>Envie nos uma mensagem:</label>
            <input type="text" name="mensagem">
            <button>Enviar</button>
        </form>
        `);
};

exports.recebeMensagem = (req, res) => {
    const mensagemRecebida = req.body.mensagem;
    res.send(`
        <h1>Sua mensagem foi enviada!</h1>
        <h2 style="display: inline" >Mensagem:</h2>
        <strong>${mensagemRecebida}</strong>.
        `);
};