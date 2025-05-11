// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

// new Object -> Object.prototype
const objB = {
    chaveB: 'B'
    // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);  // Indicando que o prototype de objB será o objA (Herança)
Object.setPrototypeOf(objC, objB);  // Indicando que o prototype de objC será o objB (Herança)

console.log(objB.chaveA);  // Acessando uma chave do prototype
console.log(objC.chaveB);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa', 5);
console.log(p1);

p1.desconto(50);
console.log(p1);

p1.aumento(100);
console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(50);
console.log(p2);
