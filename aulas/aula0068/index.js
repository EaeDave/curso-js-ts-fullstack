// Utilizando classes, a própria classe atribui os métodos ao prototype de forma automática
// A declaração dos métodos fica dentro da classe mesmo.

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    };

    falar() {  // Automaticamente atribuído ao Object.prototype
        console.log(`Oi, eu me chamo ${this.nome} ${this.sobrenome}`);
        
    };

    comer() {
        console.log(`${this.nome} ${this.sobrenome} está comendo.`);
    };

    beber() {
        console.log(`${this.nome} ${this.sobrenome} está bebendo.`);
    };
};

const p1 = new Pessoa('David', 'Rodrigues');
console.log(p1);
p1.falar();
p1.comer();
p1.beber();

// Comparativo com Constructor Function
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
};

Pessoa2.prototype.falar = function() {
    console.log(`Oi, eu me chamo ${this.nome} ${this.sobrenome}`);
};

Pessoa2.prototype.comer = function() {
    console.log(`${this.nome} ${this.sobrenome} está comendo.`);
};

Pessoa2.prototype.beber = function() {
    console.log(`${this.nome} ${this.sobrenome} está bebendo.`);
};


const p2 = new Pessoa2('Camila', 'Santos');
console.log(p2);
