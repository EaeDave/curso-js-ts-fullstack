// Tipos primitivos
// String, number, undefined, null, boolean, symbol
const NOME = "David";  // string
const NUM = 10;  // number
const NUM2 = 10.52;  // number
let nomeAluno;  // undefined = não aponta para local nenhum na memória
let sobrenomeAluno = null;  // Nulo -> não aponta para local nenhum na memória
const BOOLEAN_TRUE = true;  // boolean (lógico)
const BOOLEAN_FALSE = false;  // boolean (lógico)

console.log(NOME, typeof NOME);
console.log(NUM, typeof NUM);
console.log(NUM2, typeof NUM2);
console.log(nomeAluno, typeof nomeAluno);
console.log(sobrenomeAluno, typeof sobrenomeAluno);
console.log(BOOLEAN_TRUE, typeof BOOLEAN_TRUE);
console.log(BOOLEAN_FALSE, typeof BOOLEAN_FALSE);

// Tipos não primitivos, diferença

const a = [1, 2];  // array
const b = a;  // b é uma referência na memória de a, e não uma cópia
console.log(a, b);

b.push(3);  // ao mudar o valor de b, também altera o valor de a, porque fazem referência um ao outro

console.log(a);  // [1, 2, 3]