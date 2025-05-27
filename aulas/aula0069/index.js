// Symbol, tipo de dado primitivo (Cria um valor único e imutável) - Usado para exclusividade de propridades
const _velocidade = Symbol('velocidade');  // Symbol() sempre gera um id aleatório

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('SETTER');
        
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('GETTER');
        
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    desacelerar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');
// for (let i = 0; i <= 200; i++) {
//     console.log(c1);
//     c1.acelerar();
// }

c1.velocidade = 101;  // Não aceita esse valor
c1.velocidade = 50;  // Aceita
console.log(c1.velocidade);

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');  // Separa valores por espaço em um array
        this.nome = valor.shift();  // Pega o primeiro valor do array
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('David', 'Rodrigues');
console.log(p1);
console.log(p1.nomeCompleto);

p1.nomeCompleto = 'Camila Santos';
console.log(p1);



