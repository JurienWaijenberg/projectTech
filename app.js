const express = require ('express');
const { engine } = require ('express-handlebars');

const app = express();

app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.get('/pizza', (req, res) => {
  res.render('pizza');
});

app.listen(3000);