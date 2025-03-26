/**
 * Operadores de comparação
 * > maior que
 * >= maior ou igual a
 * < menor que
 * <=menor ou igual a
 * == igualdade (checa valor) * Não recomendável utilizar
 * === igualdade estrita (checa valor e tipo)
 * != diferente (checa valor) * Não recomendável utilizar
 * !== diferente estrito (checa valor e tipo)
 */

console.log(10 > 5);  // true
console.log(5 >= 5);  // true
console.log(10 < 5);  // false

const num1 = 10;
const num2 = '10';
console.log(num1 == num2);  // Retorna true, pois compara somente valores
console.log(num1 === num2);  // Retorna false, pois os tipos são diferentes

console.log(num1 != num2);  // false
console.log(num1 !== num2);  // true





