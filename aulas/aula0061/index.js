/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread)
 */

/**
 * Já foi visto:
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

const produto = {nome: 'Caneca', preco: 1.80};
const outroProdutro = produto;  // Nesse caso essa variável aponta para o endereço na memória de produto, e não é uma cópia
const produtoCopia = { 
    ...produto,  // spread operator para copiar valores de tipos por referência
    material: 'sabão'  // Ainda é possível acrescentar chaves
 };  

outroProdutro.nome = 'Tesoura';  // O valor de produto alterou junto
console.log(produto);  // { nome: 'Tesoura', preco: 1.8 }
console.log(outroProdutro);  // { nome: 'Tesoura', preco: 1.8 }

produtoCopia.nome = 'Sabonete';
produtoCopia.preco = 5;
console.log(produtoCopia);  // { nome: 'Sabonete', preco: 5, material: 'porcelana }

// Outra forma de copiar um objeto, é através do método Object.assign(target, source)
const meuNovoProduto = Object.assign({}, produto);  // O target é um objeto vazio, e a source é o que será copiado para esse objeto vazio
meuNovoProduto.nome = 'Copo';
meuNovoProduto.preco = 5.5;
meuNovoProduto.material = 'porcelana'
console.log(meuNovoProduto);

console.log(Object.keys(produto), Object.values(produto));  // Retorna um array com as chaves, e o outro retorna um array dos valores dessas chaves consecutivamente

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// Object.entries retorna chave e valor em array

console.log(Object.entries(produto));
