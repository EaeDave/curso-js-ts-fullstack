/**
 * Operadores lógicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 */

const fazSol = true;
const tenhoDinheiro = true;
const vouViajarHoje = console.log(fazSol && tenhoDinheiro);  // true (Faz sol e tenho dinheiro, logo, vou viajar)

const precisoPagarContas = true;
const meuCarroQuebrou = false;
const devoIrTrabalhar = console.log(precisoPagarContas || estouComSono);  // true

const falso = !true;  // Negação
const verdadeiro = !false;  // Negação

console.log(falso);  // false
console.log(verdadeiro);  // true

const usuario = 'David';
const senha = 'SouDesenvolvedor123';

const usuarioLogadoComSucesso = usuario === 'David' && senha === 'SouDesenvolvedor123';



