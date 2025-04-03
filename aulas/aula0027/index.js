const pessoa = {
    nome: 'David',
    sobrenome: 'Rodrigues',
    idade: 23,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { nome: n = '', sobrenome, idade } = pessoa;  // Atribuição via desestruturação
// const nome = pessoa.nome;  // Atribuição normal
console.log(n, sobrenome);

const { 
    endereco: {  rua: r = 12345, numero },  // O = 12345 é um valor padrão caso não haja valor algum em rua
    endereco 
} = pessoa;  // Atribuição via desestruturação de objetos compostos
console.log(r, numero, endereco);

// Pegando o resto dos valores em uma atribuição via desestruturação de objetos

const {nome: nm = 'Sem nome', ...resto} = pessoa;
console.log(nm, resto);

