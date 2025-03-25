const array = [1, 2, 3];
array.push(4);  // É possível mudar valores, mesmo em uma constante em array
// array = 5  // O que não é possível, é reatribuir a constante.
console.log(array);

// Variáveis relacionadas
const nome01 = 'David';
const sobrenome01 = 'Rodrigues';
const idade01 = 23;

// Variáveis relacionadas
const nome02 = 'Camila';
const sobrenome02 = 'Santos';
const idade02 = 24;

// Criando objeto
const pessoa1 = {  // Um objeto pessoa1
    nome: 'David',  // Atributos do objeto
    sobrenome: 'Rodrigues',
    idade: 23
};

console.log(pessoa1.nome);  // David
console.log(pessoa1.sobrenome);  // Rodrigues
console.log(pessoa1.idade);  // 23

function criaPessoa (nome, sobrenome, idade) {  // Função que cria objeto (Factory - Fábrica)
    return { nome, sobrenome, idade };
}

const camila = criaPessoa('Camila', 'Santos', 24);
console.log(camila);

const david = criaPessoa('David', 'Rodrigues', 23);
console.log(david);

const meuObjetoPessoa = {
    nome: 'David',  // Atributos do objeto
    sobrenome: 'Rodrigues',
    idade: 23,

    fala () {  // Métodos do objeto
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos de idade.`);  // o this é necessário para referenciar o próprio objeto
    }
}

meuObjetoPessoa.fala();

function criaAnimal(nome, tipo, idade) {
    return {
        nome,  // Um atributo do objeto
        tipo,
        idade,

        saudacao() {  // Um método do objeto
            console.log(`Olá, eu sou o ${this.nome}, sou um animal do tipo ${this.tipo} e tenho ${this.idade} anos de idade.`);
        },

        fazAniversario() {
            ++this.idade;
        }
    };
}

const Tommy = criaAnimal('Tommy', 'gato', 4);  // Criando um objeto com a função factory
console.log(Tommy.nome);  // Exibindo um atributo do objeto
Tommy.saudacao();  // Chamando um método do objeto criado

console.log('Ele tem', Tommy.idade, 'anos de idade.');
Tommy.fazAniversario();  // Incrementou um ano a mais
console.log('Ele tem', Tommy.idade, 'anos de idade.');

Tommy.saudacao();
Tommy.fazAniversario();
Tommy.saudacao();

