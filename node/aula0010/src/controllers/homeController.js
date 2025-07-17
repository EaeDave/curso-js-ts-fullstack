exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.coletaDados = (req, res) => {
    const valorRecebido = req.body.nome;
    res.send(`O valor recebido foi: ${valorRecebido}`);
};