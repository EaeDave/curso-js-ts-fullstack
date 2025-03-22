let num1 = 1;  // number
let num2 = 2.5;  // number
let num3 = 220;
let num4 = 10.1289390128790471290457;

console.log(num1.toString() + num2.toString());  // Convertendo numbers para strings e concatenando
console.log(num3.toString(2));  // Exibindo número em binário
console.log(num4.toFixed(2));  // Arredondando número
console.log(Number.isInteger(num1));  // Validando se um número é inteiro => true
console.log(Number.isInteger(num2));  // Validando se um número é inteiro => false

let temp = num1 * 'Ola';  // => NaN
console.log(Number.isNaN(temp));  // true

let numeroImpreciso1 = 0.7;
let numeroImpreciso2 = 0.1;
console.log(numeroImpreciso1 + numeroImpreciso2);  // 0.79999999999

let calculoNumeroImpreciso = (numeroImpreciso1 + numeroImpreciso2).toFixed(1)  // 0.8
console.log(calculoNumeroImpreciso);
console.log(Number.isInteger(calculoNumeroImpreciso));  // false

