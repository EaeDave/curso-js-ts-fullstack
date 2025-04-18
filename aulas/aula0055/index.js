// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosSomados = numeros.reduce((acumulador, numero, indice) => {
    acumulador += numero;
    return acumulador;    
}, 0);

console.log(numerosSomados);

const pares = numeros.reduce((acumulador, numero, indice) => {
    if (numero % 2 ===  0) {
        acumulador.push(numero);
    }
    return acumulador;
}, []);

console.log(pares);

const dobroNumeros = numeros.reduce((acumulador, numero) => {
    let dobro = numero * 2;
    acumulador.push(dobro);
    return acumulador;
}, []) ;

console.log(dobroNumeros);

// Retorne a pessoa mais velha
const pessoas = [
    {nome: 'David', idade: 23},
    {nome: 'Camila', idade: 24},
    {nome: 'Liz', idade: 4},
    {nome:'Amaro', idade: 62}
]

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pessoaMaisVelha);