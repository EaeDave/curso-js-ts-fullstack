// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pares = numeros.filter(numero => numero % 2 === 0);  // Retorna cada item dentro do array que atende esse requisito
console.log(pares);
const dobro = pares.map(numero => numero * 2);  // Modifica o valor do array original para esse requisito
console.log(dobro);
const soma = dobro.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador;  // Itera sobre todo o array e retorna o final
}, 0);
console.log(soma);