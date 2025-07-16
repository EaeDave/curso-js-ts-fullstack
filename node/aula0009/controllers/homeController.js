exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="post">
            <label>Nome do Cliente:</label>
            <input type="text" name="nome"</input>
            <button>Enviar</button>
        </form>
        `);
};

exports.coletaDados = (req, res) => {
    const valorRecebido = req.body.nome;
    res.send(`O valor recebido foi: ${valorRecebido}`);
};