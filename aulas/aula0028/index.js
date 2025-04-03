// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

for (let index = 0; index < 6; index++) {  // Laço de repetição for
    console.log(`Linha ${index}`);
}

for (let index = 0; index < 10; index++) {  // Exibindo somente números pares
    const par = index % 2;
    if (par === 0) {
        console.log(`${index} é um número par!`);
    }
}

console.log('');


const frutas = ['Maça', 'Pêra', 'Uva', 'Banana'];

for (let index = 1; index < frutas.length; index++) {
    console.log(`Fruta${index} = ${frutas[index]}`);
    
}

