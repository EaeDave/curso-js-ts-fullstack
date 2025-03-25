const alunosVariavel = 'Luiz Maria João';  // String comum, não separa os nomes
const alunosArray = ['Luiz', 'Maria', 'João'];  // Um array pode ser considerado uma lista ou coleção de dados
console.log(alunosVariavel, alunosArray);

const novoArray = ['David', 123, true, false, -1.5, null];  // Um array pode conter vários tipos de dados em js, porém é
// recomendável utilizar somente o mesmo tipo.
console.log(novoArray);

//                0        1        2
const nomes = ['David', 'Camila', 'Liz'];  // Arrays são indexados assim como strings, porém cada índice representa um elemento
console.log(nomes[0]);  // David
console.log(nomes[1]);  // Camila
console.log(nomes[2]);  // Liz

nomes[0] = 'Rodrigues';  // O index 0 mudou o valor
console.log(nomes);

nomes[3] = 'David';  // Quando o index ainda não tem valor atribuído, é adicionado no final do array
console.log(nomes);

nomes[nomes.length] = 'Jooj';  // Adiciona o valor no último index
console.log(nomes);

// Há uma função/método que faz isso
nomes.push('Bianca');  // Adiciona no final do array
console.log(nomes);

// Função/Método que adiciona no início do array (Alto consumo de processamento), também move os demais para os próximos index
nomes.unshift('Silva');
console.log(nomes);

// Função/Método que remove o elemento do último index e retorna o valor (Pode ser armazenado em uma variável)
const valorRemovidoFinal = nomes.pop();
console.log(nomes);
console.log(`O valor removido foi "${valorRemovidoFinal}"`);

// Função/Método que remove o elemento do primeiro index e retorna o valor (Pode ser armazenado em uma variável), também move os outros index
const valorRemovidoInicio = nomes.shift();
console.log(nomes);
console.log(`O valor removido foi "${valorRemovidoInicio}"`);

// É possível deletar um elemento do array, preservando os index e atribuindo um valor undefined ou vazio para o mesmo
delete nomes[0];
console.log(nomes);
console.log(nomes[0]);  // undefined

// Valores que não existem retornam undefined
console.log(nomes[50]);  // undefined

// Fatiando arrays para obter somente alguns resultados
const alunosAprovados = ['Maria', 'João', 'Amanda', 'Lucas'];
console.log(alunosAprovados.slice(0, 2));  // Retorna Maria e João
console.log(alunosAprovados.slice(1, 3));  // Retorna João e Amanda
console.log(alunosAprovados.slice(0, -3));  //Retorna somente Maria

// Array em JS é do tipo object
console.log(typeof alunosAprovados);  // object

// Confirmando que está trabalhando com array
console.log(alunosAprovados instanceof Array);  // true












