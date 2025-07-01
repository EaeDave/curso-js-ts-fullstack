module.exports = class Gato {
    constructor(nome) {
        this.nome = nome;
    }

    miar() {
        console.log(`${this.nome} está miando "MIAU, MIAU MIAU!"`);
        
    }
}