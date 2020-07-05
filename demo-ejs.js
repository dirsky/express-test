const express = require('express');
const app = express();

// npm install ejs --save

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('home.ejs',{name: 'frank'});
});

app.get('/e/:id', function (req, res) {
  res.render('home.ejs',{name: req.params['id']});
});

app.listen(3001);
