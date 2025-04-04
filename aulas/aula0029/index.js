// For in -> lê os índices ou chaves do objeto
const frutas = ['Pera', 'Maçã', 'Uva']  // Vetor = Array de uma única dimensão (Sem outros arrays dentro)

for (const fruta in frutas) {  // No caso de for in e for of, declarar uma constante no lugar de let caso não deseja reatribuir o valor da mesma
    console.log(frutas[fruta]);

}

const pessoa = {
    nome: 'David',
    sobrenome: 'Rodrigues',
    apelido: 'Dave',
    idade: 23
}

for (const propriedade in pessoa) {
    console.log(propriedade, pessoa[propriedade]);
}

console.log(pessoa.nome);
console.log(pessoa['nome']);



console.log();


for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]);
    
}