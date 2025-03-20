let varA = 'A';  // B
let varB = 'B';  // C
let varC = 'C';  // A
console.log(varA, varB, varC);

console.log([varA, varB, varC] = [varB, varC, varA]);  // Resolvendo com arrays

const VAR_A_TEMP = varA;  // Variável temporária pra armazenar o valor de varA
varA = varB;  // B
varB = varC;  // C
varC = VAR_A_TEMP;  // A
console.log(varA, varB, varC);

