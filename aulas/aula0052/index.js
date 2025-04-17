// Concatenando arrays

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const arraysConcatenados = array1.concat(array2, [7, 8, 9]);  // Usando o método concat
console.log(arraysConcatenados);

const nomes1 = ['David', 'Camila', 'Liz'];
const nomes2 = ['Logan', 'Bianca', 'Naomi'];
const nomesConcatenados = [...nomes1, ...nomes2, 'Amaro'];  // Usando o spread operator
console.log(nomesConcatenados);

// 🔴 Exercício 1: Concatenar múltiplos arrays + adicionar item extra
// Enunciado:
// Você tem três arrays de ingredientes:

// js
// Copiar
// Editar
// let base = ["massa"];
// let molho = ["tomate", "manjericão"];
// let cobertura = ["queijo", "azeitona"];
// Crie um novo array chamado pizzaCompleta que seja a junção de todos os ingredientes, mais o item "orégano" adicionado ao final (sem usar .push()).

// Objetivo:
// Treinar a concatenação de múltiplos arrays + adicionar valor diretamente com .concat().

let base = ["massa"];
let molho = ["tomate", "manjericão"];
let cobertura = ["queijo", "azeitona"];

const pizzaCompleta = [...base, ...molho, ...cobertura, 'orégano'];
console.log(pizzaCompleta);
