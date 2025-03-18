const NOME = 'David Rodrigues da Silva';
const IDADE = 23;
const PESO = 70;
const ALTURA_EM_M = 1.7;
const IMC = PESO / (ALTURA_EM_M ** 2);
const ANO_NASCIMENTO = 2025 - IDADE;
console.log(NOME, 'tem', IDADE, 'anos, pesa', PESO, 'kg');
console.log('tem', ALTURA_EM_M, 'de altura e seu IMC é de', IMC);
console.log(`${NOME} nasceu em ${ANO_NASCIMENTO}`);  // Template Strings
console.log('Não foi utilizado variáveis let porque não foi necessário mudar o valor de nada.')