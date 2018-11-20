var express = require('express');
//starts our express app
var app = express();
var todoController = require('./controllers/todoController');

//for template engine
app.set('view engine','ejs');
//for static files
app.use( express.static('./Public'));
//fire todoController module
todoController(app);
//fire listener for port 3000
app.listen(3000);
console.log('listening to port 3000');
