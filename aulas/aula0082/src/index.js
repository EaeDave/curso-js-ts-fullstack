// import { nome as nome2, sobrenome, idade, soma, Pessoa} from './modulo1';
import * as modulo from './modulo1';
const nome = 'Amaro'
console.log(nome, modulo.nome, modulo.sobrenome, modulo.idade);
console.log(modulo.soma(5, 5));
const string = 'David';
const novoArray = [...string];

const david = new modulo.Pessoa('David', 'Rodrigues', 23);
console.log(david);
