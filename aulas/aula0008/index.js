
/**
 * Aritméticos
 * + Adição | Concatenação
 * - Subtração
 * / Divisão
 * * Multiplicação
 * ** | Potenciação
 * % Módulo ou resto da divisão
 */

const NUM_1 = 5;  // number
const NUM_2 = 10;  // number
const NUM_3 = '5';  // string

console.log(NUM_1 + NUM_2);  // 15
console.log(NUM_1 - NUM_2);  // -5
console.log(NUM_1 * NUM_2);  // 50
console.log(NUM_1 / NUM_2);  // 0.5
console.log(NUM_1 + NUM_3);  // 55 (O number 5 foi concatenado com a string '5')
console.log(NUM_1 ** NUM_2);  // 9765625
console.log(NUM_1 % NUM_2);  // 5

console.log(typeof (NUM_1 + NUM_3));  // string

console.log(`Ordem de precedência: 5+5*2=${5+5*2}`);

/**
 * Operadores de incremento e decremento
 * Incremento = ++
 * Decremento = --
 */

let contador = 1;
contador++;  // operação de incremento
console.log(contador);  // 2
contador++;
console.log(contador);  // 3
contador--;  // operador de decremento
console.log(contador);  // 2


/**
 * Operadores de atribuição
 * +=
 * -=
 * **=
 * //=
 */

let contadorEmDois = 0;
const PASSO = 2;  // Número de passos que o contador irá pular por cada iteração
contadorEmDois += PASSO;  // valor do contadorEmDois + valor do PASSO
console.log(contadorEmDois);  // 2
contadorEmDois += PASSO;
console.log(contadorEmDois);  // 4

/**
 * Conversão de tipos
 * Number();  Dessa forma a conversão é feita de forma dinâmica, se tiver casas decimais ele permanece float, senão, fica int
 * parseInt();  Converte para int, ignorando casas decimais
 * parseFloat();  Considera casas decimais
 * toString();  Converte um número para string
 */

const NUMERO_1 = 10;
const NUMERO_2 = parseInt('5');  // Convertendo string para number
console.log(typeof NUMERO_2);  // Number




