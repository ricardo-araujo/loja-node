var app = require('./config/express')();
var produtosRoute =  require('./app/routes/produtos')(app);

app.listen(8000, function() {
	console.log('Server is running...');
});