// Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menor do que o original.

// Retorne os números maiores que 10
//               0   1  2   3  4  5
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) {
//     return valor > 10;  // Retorna true, que é adicionado no novo array
// }

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice);
//     return valor > 10;
    
// });

const numerosFiltrados = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados);


// let numerosMaioresQueDez = [];
// for (const numero of numeros) {
//     if (numero > 10) {
//         numerosMaioresQueDez.push(numero);
//     }
// }
// console.log(numerosMaioresQueDez);

// 🧪 Exercício 1: Filtrar números pares
// Dado o array abaixo, use filter() para criar um novo array contendo apenas os números pares.
const numerosSequenciais = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Resultado esperado: [2, 4, 6, 8, 10]

const numerosPares = numerosSequenciais.filter(valor => valor % 2 === 0);
console.log(numerosPares);

// 📏 Exercício 2: Filtrar palavras com mais de 5 letras
// Dado o array de palavras, filtre apenas aquelas que têm mais de 5 letras.

const palavras = ['casa', 'computador', 'mesa', 'cadeira', 'janela', 'pão'];
// Resultado esperado: ['computador', 'cadeira', 'janela']

const palavrasMaiorCinco = palavras.filter(valor => valor.length > 5);
console.log(palavrasMaiorCinco);

// 👤 Exercício 3: Filtrar pessoas com idade maior ou igual a 18
// Dado o array de objetos pessoas, filtre apenas as que são maiores de idade (idade >= 18).


const pessoas = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carlos', idade: 15 },
  { nome: 'Daniela', idade: 30 },
  {nome: 'Letícia', idade: 18}
];

const pessoasMaioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);
console.log(pessoasMaioresDeIdade);

// Resultado esperado:
// [
//   { nome: 'Bruno', idade: 22 },
//   { nome: 'Daniela', idade: 30 }
// ]

// Também retorne pessoa cujo nome termina com a
const pessoaA = pessoas.filter((pessoa) => pessoa.nome.endsWith('a'));
console.log(pessoaA);
