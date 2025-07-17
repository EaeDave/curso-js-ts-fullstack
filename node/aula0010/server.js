const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.set('views', path.resolve(__dirname, 'src', 'views'));  // Passando o caminho dos views
app.set('view engine', 'ejs');  // Selecionando uma "engine" para renderizar as views, ejs é um HTML "premium"

app.use(routes);


app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('server is listening on port 3000...');
});