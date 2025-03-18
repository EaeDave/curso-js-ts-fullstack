/**
 * Mesmas regras das variáveis se aplicam a constantes
 * Não podemos criar constantes com palavras reservadas
 * Precisam ter nomes significativos
 * Não podem começar o nome com um número
 * Não podem conter espaços ou traços
 * Utiliza-se camelCase por convenção
 * Case-sensitive
 * Não podemos redeclarar constantes NEM COM CONST E NEM ATRIBUINDO UM NOVO VALOR
 * Ocupa menos espaço na memória do que variáveis, porém o valor não pode ser alterado
 */

const NOME = 'David';  // const precisa ser declara e inicializada ao mesmo tempo
console.log(NOME);
// NOME = 'Rodrigues';  atribuir um novo valor a uma constante não é possível

const PRIMEIRO_NUMERO = 5;
const SEGUNDO_NUMERO = 10;
const RESULTADO = PRIMEIRO_NUMERO * SEGUNDO_NUMERO;
const RESULTADO_DUPLICADO = RESULTADO * 2;
let resultadoTriplicado = RESULTADO * 3;
console.log(RESULTADO);
console.log(RESULTADO_DUPLICADO);
console.log(resultadoTriplicado);

console.log(typeof PRIMEIRO_NUMERO);  // number