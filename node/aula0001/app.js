const mod1 = require('./mod1');  // Importando tudo do módulo mod1
const { Pessoa } = require('./mod2')  // Destructing para não ter que usar Pessoa.Pessoa
const axios = require('axios');  // Importando módulos de node_modules

console.log(mod1);  // Olhando o objeto completo
mod1.falaNome();

const p1 = new Pessoa('David', 'Rodrigues');
console.log(p1);

axios('https://viacep.com.br/ws/27961034/json/')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));
