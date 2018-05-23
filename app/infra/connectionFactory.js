var mysql  = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Solange1989',
        database: 'loja_node'
    });
}

module.exports = function() {
    return createDBConnection;
};
