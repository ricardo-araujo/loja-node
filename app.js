var app = require('./config/express')();

app.listen(8000, function() {
    console.log('Server is running...');
})
