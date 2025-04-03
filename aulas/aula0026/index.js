// let a = 'A';  // B
// let b = 'B';  // C
// let c = 'C';  // A

// console.log(a, b, c);

// [a, b, c] = [1, 2, 3];  // Atribuição via desestruturação com arrays

// console.log(a, b, c);

// [a, b, c] = ['B', 'C', 'A'];

// console.log(a, b, c);

//               0  1  2  3  4  5  6  7  8    (Index)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0];
const [primeiroNumero, segundoNumero, ...resto] = numeros;  // Atribuição via desestruturação (Conversão implícita de array para number)

console.log(primeiroNumero, segundoNumero);  // 1 2
console.log(resto);  // Todo o resto que sobrou do array que não foi atribuído individualmente

const nomes = ['David', 'Camila', 'Liz', 'Logan'];  // Atribuição via desestruturação (Conversão implícita de array para string)
const [primeiroNome, segundoNome, terceiroNome, ...ultimo] = nomes;  // Ao colocar os três pontos (rest operator ...) e nomeando a variável, será armazenado em um array
// Todos os elementos que sobraram
console.log(primeiroNome, ultimo);

// Pulando valores
const palavras = ['Rei', 'Roda', 'Rato', 'Romeu', 'Rema'];
const [um, , tres, , cinco] = palavras;
console.log(um, tres, cinco);

const arrayComposto = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(arrayComposto[0]);  // No index 0, há o primeiro array [1, 2, 3]
console.log(arrayComposto[0][2]);  // No index 0, dentro do primeiro array [1, 2, 3], o index 2 do segundo array é 3  (3)

const [, [, , seis], [, , nove]] = arrayComposto;  // Atribuição por desestruturação de array composto
console.log(seis, nove);

const arraysDeNumeros = [
    ['One', 'Two', 'Three'],
    ['Four', 'Five', 'Six'],
    ['Seven', 'Eight', 'Nine']
];

const [numeros1, numeros2, numeros3] = arraysDeNumeros;  // Dividindo as listas

console.log(numeros1, numeros2, numeros3);







