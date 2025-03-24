let num1 = 9.54578;
let num2 = Math.floor(num1);  // Arredondamento para baixo
let num3 = Math.ceil(num1);  // Arredondamento para cima
let num4 = Math.round(num1); // Arredonda para o inteiro mais próximo
console.log(num1, num2, num3, num4);
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));  // Retorna o maior número
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));  // Retorna o menor número
console.log(Math.random());  // Retorna um número ponto flutuante entre zero e 1, porém o 1 não é incluso
const ALEATORIO = Math.round(Math.random() * (10 - 5) + 5);  // Entre 10 e 5
console.log(ALEATORIO)
console.log(Math.PI);  // Retorna o valor de PI
console.log(Math.pow(2, 10));  // 2 elevado a 10
console.log(2 ** 10);  // 2 elevado a 10
console.log(9 ** (1/2));  // Descobrindo a raíz quadrada de nove 9
console.log(100 / 0);  // Retorna Infinity e é considerado um valor true