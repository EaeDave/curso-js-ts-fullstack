// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);
console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'David', idade: 23},
    {nome: 'Camila', idade: 24},
    {nome: 'Liz', idade: 4},
    {nome:'Amaro', idade: 62}
]

const nomes = pessoas.map(pessoa => pessoa.nome);
const idades = pessoas.map(pessoa => {
    return {
        idade: pessoa.idade
    };
});
const pessoasMaisID = pessoas.map((pessoa, indice) => {
    const newPessoa = {...pessoa};  // Copiando um objeto
    newPessoa.id = indice;
    return newPessoa;
});

console.log(nomes);
console.log(idades);
console.log(pessoasMaisID);

// 🔹 Exercício 2: Transformar nomes em maiúsculas
// Enunciado:
// Dado um array de nomes, use .map() para retornar um novo array com todos os nomes em letras maiúsculas.

// js
// Copiar
// Editar
const novosNomes = ['ana', 'bruno', 'carla'];

// Seu código aqui

const nomesMaiusculos = novosNomes.map(nome => nome.toUpperCase());
console.log(nomesMaiusculos);
console.log(novosNomes);
