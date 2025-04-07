// Escreva uma função que recebe 2 números e retorne o maior deles
// Escreva uma função que recebe 2 números e retorne o menor deles

function maiorNumeroEntre(numero1, numero2) {
    const maiorNumero = numero1 > numero2 ? numero1 : numero2;
    return maiorNumero
}

const menorNumeroEntre = (numero1, numero2) => numero1 < numero2 ? numero1 : numero2;  // Utilizando arrow function

console.log(maiorNumeroEntre(10, 50));
console.log(menorNumeroEntre(10 ,50));


