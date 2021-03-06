module.exports = function(app) {

    app.get('/produtos', function(req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            res.render('produtos/lista', {lista: results});
        });

        connection.end();
    });

    app.get('/produtos/form', function(req, res) {

        res.render('produtos/form', {validationErrors: {}, produto: {}});

    });

    app.post('/produtos', function(req, res) {

        var produto = req.body;

        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        var errors = req.validationErrors();

        if (errors) {
            res.render('produtos/form', {validationErrors: errors, produto: produto});
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(err, results) {
            res.redirect('/produtos');
        });

        connection.end();
    });
};