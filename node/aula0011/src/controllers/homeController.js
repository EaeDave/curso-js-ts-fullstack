exports.displayGet = (req, res) => {
    res.render('homeViews');
};

exports.processPost = (req, res) => {
    const clientName = req.body.clientName;
    res.send(`
        Olá, sr(a) ${clientName}, seja bem-vindo(a)!
        `);
};