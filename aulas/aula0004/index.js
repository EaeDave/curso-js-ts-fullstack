let nome = 'João';  // String
let nome2 = 'Maria';  // Variáveis armazenam valores na memória em tempo de execução
let naoInicializada;  // Essa variável foi declarada, porém não inicializada (dada um valor) explícitamente
// o motor do js reserva um valor "undefined" para esses casos, então não retorna erro.

console.log(naoInicializada);  //undefined

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu', nome2 + '.');
console.log(nome, 'casou-se com', nome2, 'em 2012.');
console.log(nome2, 'teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'Se chama Eduardo.');

let meuNome;  // Variável declarada
meuNome = 'David';  // Inicializada
console.log(meuNome);  // David
meuNome = 'Rodrigues';  // È possível alterar o valor de variáveis depois de terem sido declaradas e inicializadas.
console.log(meuNome);  // Rodrigues
// let meuNome = 'David';  Não é possível redeclarar uma variável utilizando let

// Não podemos criar variáveis com palavras reservadas
// let if; (X)
// let console; (X)

// Variáveis precisam ter nomes significativos (Convenção)
// let n = 'David'; (X)
// let nome = 'David'; (V)  Essa variável tem uma declaração mais intuitiva

// Não podem começar o nome de uma variável com um número
// let 1nome = 'David'; (X)

// Não podem conter espaços ou traços
// let minha variavel = 'David'; (X)
// let minha-variavel = 'David'; (X)
// let minhaVariavel = 'David'; (V) utiliza-se camelCase

// Variáveis são case-sensitive
let nomeCliente = 'Camila';
let nomecliente = 'Liz';
console.log(nomeCliente, nomecliente);  // Camila Liz

// NÃO UTILIZAR VAR, UTILIZE LET.
