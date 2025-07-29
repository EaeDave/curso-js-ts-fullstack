const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));  // Middleware para tratar dados body enviados pelo post
app.use(express.static(path.resolve(__dirname, 'public')));  // Definindo onde ficará os arquivos estáticos

app.set('views', path.resolve(__dirname, 'src', 'views'));  // Difinindo onde ficará as views
app.set('view engine', 'ejs');  // Escolhendo uma engine de views

app.use(routes);


app.listen(3000, () => { console.log('http://localhost:3000') });