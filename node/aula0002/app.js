const Cachorro = require('./modules/mod');
const Gato = require('./modules/cat');
const path = require('path');

const grace = new Cachorro('Grace');
grace.latir();

const tommy = new Gato('Tommy');
tommy.miar();

console.log(__filename);  // Variável que retorna o caminho completo inclusive do arquivo
console.log(__dirname);  // Variável que retorna o caminho do arquivo, sem incluir o nome do arquivo

console.log(path.resolve(__dirname, '..', '..', './aula0001/mod.js'));  // A função path.resolve() resolve o caminho absoluto independentemente do OS, ainda possui parâmetros
// para manipulação de caminho