const express = require('express');
const engine = require("express-handlebars").engine
const data = require('./translation.json');
const app = express();

app.engine('handlebars', engine())
app.set('view engine', 'handlebars');


  
  app.get('/', function(req, res) {
  
    res.render('home', data.fr);
  });
  app.get('/fr', function(req, res) {
    res.render('home', data.fr);
    console.log(`data french: ${data.fr.title}`)
  });
  app.get('/es', function(req, res){
      res.render('home', data.es);
      console.log(`data spanish: ${data.es.title}`)
  });
  app.get('/en', function(req, res){
      res.render('home', data.en);
      console.log(`data english: ${data.en.title}`)
  });



app.listen(3003, () => {
    console.log('Server at port 3003')
})