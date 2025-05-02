// defineProperty -> defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,  // Mostra a chave
        value: estoque,  // Valor da chave
        writable: false,  // Bloqueia a permissão de escrever sobre a propriedade
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 1000;
console.log(p1.estoque);
delete p1.nome;  // Esse delete foi ignorado pois a propriedade de nome foi definida para configurable: false

console.log(Object.keys(p1));  // retorna um array das chaves enumeráveis do objeto


