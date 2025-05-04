// defineProperty -> Getter e Setters
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        // value: estoque,
        // writable: true,
        configurable: true,
        get: () => {
            return estoque;
        },
        set: (valor) => {
            if (typeof valor !== 'number') {
                console.log('Neste campo só é permitido números.');
                
                return;
            }
            estoque = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
console.log(p1.estoque);
p1.estoque = 5;
console.log(p1.estoque);

