/**
 * Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados
 * 
 * Referência (mutável) - array, object, function - Valores passados por referência
 */

let nome = 'David';
nome = 'Rodrigues';
nome[0] = 'C';  // Como string é imutável, aqui não houve alteração
console.log(nome[0], nome);

let a = 'A';
let b = a;  // Cópia
console.log(a, b);  // A A

a = 'Outra coisa';
console.log(a, b);  // Outra coisa A

let c = [1, 2, 3];
let d = c;  // Como array é do tipo referência, aqui está referenciando a variável c na memória
console.log(c, d);  // [1, 2, 3] [1, 2, 3]

c.push('Jooj');  // adicionando valor no array
console.log(c, d);  // ambos foram afetados

d.pop();  // removeu o último valor e a variável c também foi afetada
console.log(d, c);

let nomes = ['David', 'Camila', 'Liz'];
let outrosNomes = [...nomes];  // Agora foi feito a cópia, porque foi feito o spread e não é mais uma referência
console.log(nomes, outrosNomes);

nomes.push('Bianca');
console.log(nomes, outrosNomes);








