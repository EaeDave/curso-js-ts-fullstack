// Declaração básica de função
function saudacao(nome) {  // Declarando um parâmetro da função (Tudo que está na função, faz parte somente do escopo da mesma)
    console.log(`Olá, ${nome}. Seja bem-vindo!`);
    return `Eu estou sendo retornado, que bacana!`  // o programa para aqui
    console.log('Não será executado.');  // Não será executado
    
    
}

// 'David' é um atributo (valor) do parâmetro nome
saudacao('David');  // A função tem o objetivo de economizar código, podendo ser chamada sempre que necessário ao invés de reescrever
// console.log(nome);  Retorna erro, porque só está definido dentro do escopo da função

saudacao('Fulano');

const variavel = saudacao('Rodrigues');
console.log(variavel);  // Só haverá valor, se houver um return dentro da função

function soma(x = 0, y = 0) {  // Valores padrões de parâmetros, serão considerados caso na chamada da função não seja informado o atributo
    return x + y;
}

console.log(soma(5, 5));  // 10
const calculo = soma(25, 10);  // 35
console.log(calculo);
console.log(soma());  // 0

const raizQ = function (n) {  // Declarando uma função anônima
return n ** 0.5;
};

console.log(raizQ(9));  // 3
console.log(raizQ(16));  // 4
console.log(raizQ(25));  // 5

const dobro = n => n * 2;  // Arrow function (Quando há somente um parâmetro, não se faz necessário os parênteses)

console.log(dobro(5));  // 10