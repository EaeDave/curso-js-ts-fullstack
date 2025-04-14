// Constructor function -> Retorna objetos
// Factory function -> também retorna objetos
// Constructor function -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    const ID = 123456;  // Atributo privado

    const metodoInterno = () => {  // Método privado
        console.log("Sou um método interno");
        
    }

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ": sou um método");
    }
}

const p1 = new Pessoa("David", "Rodrigues");
const p2 = new Pessoa("Camila", "Santos");

console.log(p1.nome);  // David
console.log(p2.sobrenome);  // Santos
p1.metodo();