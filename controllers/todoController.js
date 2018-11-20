var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://rnn22:ranj160808@cluster0.mongodb.net/test";
MongoClient.connect(uri,{useNewUrlParser: true}, function(err, db) {
   // perform actions on the collection object
   db.close();
});
var todoSchema= new mongoose.Schema({
  item : String
});

var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({item:' buy flowers'}).save(function(err){
  if (err) throw err;
  console.log('item saved');
});
var data =[{item : 'NodeJs'} , {item:'ExpressJS'}, {item:'MongoDB'}];
//var setDoc = db.collection('item').doc('LA').set(data);
var urlencodedparser= bodyparser.urlencoded({extended:false});

module.exports = function(app){
// get listener to fire up the template
app.get('/todo',function(req,res){
  res.render('todo', {todos: data});

});
app.get('/contactinfo',function(req,res){
  res.render('contactinfo');

});
app.get('*', function(req, res) {
  res.render('error');
});

//app.get('/home', function(req, res) {
//  res.render('error');
//});
//app.get('/contact info', function(req, res) {
//  res.render('contactinfo');
//});
app.post('/todo',urlencodedparser,function(req,res){
  data.push(req.body);
  res.json(data);

});


};
