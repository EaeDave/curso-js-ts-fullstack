const nome = 'David';

// Formas de iterar sob a string utilizando laços
for (let index = 0; index < nome.length; index++) {
    console.log(nome[index]);
}

console.log();


for (const letra in nome) {
    console.log(nome[letra]);
    
}

console.log();


// Retorna o valor e não o index
for (const letra of nome) {
    console.log(letra);
    
}

const array = ['David', 'Rodrigues', 'da', 'Silva']

array.forEach(function(element) {  // forEach executa uma função anônima
    console.log(element);
    
});

array.forEach((element, index)=>{  // Ou arrow function
    console.log(element, index);
    
})

const pessoa = {
    nome: 'David',
    sobrenome: 'Rodrigues',
    idade: 23
}

console.log();


for (const propriedade in pessoa) {  // For in pega a chave/propriedade de um objeto
    console.log(pessoa[propriedade]);
    
}

// for (let index = 0; index < pessoa.length; index++) {  // Utilizando for clássico também não é possível iterar, já que object não é iterável
//     console.log(pessoa[index]);
    
// }


// for (const propriedade of pessoa) {  // Objetos não são iteráveis
//     console.log(propriedade);
    
// }