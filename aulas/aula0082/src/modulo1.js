const nome = 'David';
export const sobrenome = 'Rodrigues';
const idade = 23;

function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}

export { nome, idade, soma};

