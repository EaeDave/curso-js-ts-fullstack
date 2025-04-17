//               0        1        2           3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indiceInicial, qtdARemover, ...elemParaAdicionar);
// o método splice retorna um array com os elementos modificados

console.log(nomes);

nomes.splice(-1, 1);  // Simulando o nomes.pop();
console.log(nomes);

nomes.splice(-1, 0, 'David');  // Simulando o nomes.push();
console.log(nomes);

nomes.splice(0, 1);  // Simulando o nomes.shift();
console.log(nomes);

nomes.splice(0, 0, 'Camila');  // Simulando o nomes.unshift();
console.log(nomes);

/**
 * 🟢 Exercício 1: Remover um item específico de um array
 * Enunciado:
 * Dado o array let frutas = ["maçã", "banana", "laranja", "uva"];, remova a fruta "laranja" usando .splice().
 * 
 * Objetivo:
 * Praticar o uso básico do .splice() para remover um item com base no índice.
 */

const frutas = ["maçã", "banana", "laranja", "uva"];
frutas.splice(2, 1);
console.log(frutas);

/**
 * 🟡 Exercício 2: Substituir um item por outro
 * Enunciado:
 * Dado o array let cores = ["vermelho", "verde", "azul", "amarelo"];, substitua a cor "verde" por "roxo" usando .splice().
 * 
 * Objetivo:
 * Treinar como remover um item e adicionar outro ao mesmo tempo com .splice().
 */

const cores = ["vermelho", "verde", "azul", "amarelo"];
cores.splice(1, 1, 'roxo');
console.log(cores);

/**
 * 🔴 Exercício 3: Inserir múltiplos itens no meio de um array
 * Enunciado:
 * Dado o array let numeros = [1, 2, 6, 7];, insira os números 3, 4 e 5 entre os números 2 e 6 usando .splice().
 * 
 * Objetivo:
 * Praticar a inserção de múltiplos itens em uma posição específica sem remover nada.
 */

const numeros = [1, 2, 6, 7];
numeros.splice(2, 0, 3, 4, 5);
console.log(numeros);

// 💼 Desafio: Gerenciador de Tarefas (To-Do List Simples)
// Enunciado:
// Você está criando um mini gerenciador de tarefas. Começamos com uma lista:

// js
// Copiar
// Editar
// let tarefas = ["acordar", "escovar os dentes", "tomar café", "estudar", "exercícios"];
// Realize as seguintes alterações usando apenas o método .splice():

// Remova a tarefa "tomar café".

// Substitua a tarefa "estudar" por "revisar JavaScript".

// Adicione a tarefa "fazer almoço" antes da tarefa "exercícios".

// 📌 Dica:
// Use console.log(tarefas); após cada alteração para acompanhar as mudanças.

const tarefas = ["acordar", "escovar os dentes", "tomar café", "estudar", "exercícios"];
tarefas.splice(2, 1);  // tomar café removido

tarefas.splice(2, 1, 'revisar JavaScript');  // estudar substituído

tarefas.splice(3, 0, 'fazer almoço');  // tarefa adicionada antes de exercícios

console.log(tarefas);

