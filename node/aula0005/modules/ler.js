const fs = require('fs').promises;

module.exports = caminho =>  fs.readFile(caminho, 'utf-8');  // Quando a única sentença em uma arrow function é 'return' pode-se remover return e as chaves