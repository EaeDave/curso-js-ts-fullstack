// Produto -> Abstração dos objetos abaixo
// Camiseta -> Pode ter: Cor
// Caneca -> Pode ter: Material
// Ambas tem aumento e desconto

{  // Construtor Produto
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    };

    Produto.prototype.aumento = function(porcentagem) {
        this.preco += (this.preco * porcentagem / 100);
    };

    Produto.prototype.desconto = function(porcentagem) {
        this.preco -= (this.preco * porcentagem / 100);
    };
}


{  // Construtor Camiseta
    function Camiseta(nome, preco, cor) {
        Produto.call(this, nome, preco);  // Herdando propriedades de outros objetos
        this.cor = cor;
    };

    Camiseta.prototype = Object.create(Produto.prototype);  // Herdando os prototypes (métodos) de outro objeto
    Camiseta.prototype.constructor = Camiseta;  // Recolocando o construtor do produto
}


{  // Construtor Caneca
    function Caneca(nome, preco, material, estoque) {
        Produto.call(this, nome, preco);  // Herdando propriedades de outro objeto
        this.material = material;

        Object.defineProperty(this, 'estoque', {
            enumerable: true,  // Para aparecer
            configurable: false,  // Para não poder ser sobrescrita
            get: function() {
                return estoque;
            },

            set: function(quantidade) {
                if (typeof quantidade !== 'number') return;
                estoque = quantidade;
            }
        })
    };

    Caneca.prototype = Object.create(Produto.prototype);
    Caneca.prototype.constructor = Caneca;
}


const camiseta = new Camiseta('Regata', 10, 'Preta');
const caneca = new Caneca('Caneca do Itachi', 5, 'Porcelana', 5);

console.log(camiseta);

camiseta.aumento(50);
console.log(camiseta);

camiseta.desconto(50);
console.log(camiseta);

console.log(caneca);

caneca.aumento(50);
console.log(caneca);

caneca.desconto(90);
console.log(caneca);

caneca.estoque = 100;  // Setter
console.log(caneca.estoque);  // Getter


