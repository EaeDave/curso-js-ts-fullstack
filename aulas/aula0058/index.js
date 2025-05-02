// Literal strings '' "" ``
// Literal array []
// Literal objects {}

const pessoa = {
    nome: 'David',  // Par chave/valor
    sobrenome: 'Rodrigues'
};

// Duas formas de obter um valor de uma chave em um objeto
const chave = 'sobrenome';
console.log(pessoa.nome);
console.log(pessoa[chave]);

// Além do literal da para utilizar o construtor
// new Array();
// new Object();
const pessoa1 = new Object();
pessoa1.nome = 'Camila';
pessoa1.sobrenome = 'Santos';
console.log(pessoa1);

delete pessoa1.sobrenome;  // Deletando uma chave de um objeto
console.log(pessoa1);

pessoa1.falarNome = function() {  // Atribuindo um método para o objeto
    console.log(`Oi, eu sou o(a) ${this.nome}`);
    
}

pessoa1.falarNome();  // Chamando o método do objeto

pessoa1.idade = 24;

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    const dataNascimento = dataAtual.getFullYear() - this.idade;
    return dataNascimento;
}

console.log(pessoa1.getDataNascimento());

for (const chave in pessoa1) {
    console.log(chave, pessoa1[chave]);  
}

// Factory functions / Constructor functions / Classes

// Exemplo de Factory function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {  // get faz uma função se comportar como propriedade
            return this.nome + ' ' + this.sobrenome;
        }
    }
}

const pessoa2 = criaPessoa('Liz', 'Santos');
console.log(pessoa2);

console.log(pessoa2.nomeCompleto);

// Exemplo de Constructor function
function Pessoa(nome, sobrneome) {
    this.nome = nome,
    this.sobrenome = sobrneome;

    // return this
}

// A palavra new inicilamente cria um objeto vazio {}
// {} e desse objeto vazio, atrela a palavra this ao objeto
// {} <- this
// Isso garante propriedades e métodos individuais para cada objeto, já que o this referencia apenas o objeto instanciado
const pessoa3 = new Pessoa('Amaro', 'Rodrigues');  // o new também retorna o próprio objeto
console.log(pessoa3);
