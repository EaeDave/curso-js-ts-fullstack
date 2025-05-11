// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}
// Usar prototype em vez de definir métodos diretamente dentro do objeto 
// (ou dentro da função construtora) tem dois motivos principais: eficiência de memória e compartilhamento de comportamento.
Pessoa.prototype.nomeCompleto = function() { return this.nome + ' ' + this.sobrenome};
// Se você define métodos dentro da função construtora, cada instância criada 
// terá sua própria cópia daquele método. Isso é ineficiente, especialmente se você cria muitas instâncias.

// Instância
const pessoa1 = new Pessoa('David', 'Rodrigues');
const pessoa2 = new Pessoa('Camila', 'Santos');

console.dir(pessoa1);
console.dir(pessoa2);

/**
 * Javascript é baseado em protótipos para passar propriedades e métodos
 * de um objeto para outro.
 * 
 * Definição de protótipo
 * Protótipo é o termo usado para se referir ao que foi criado pela
 * primeira vez, servindo de modelo ou molde para futuras produções.
 * 
 * Todos os objetos tem uma referência interna para um protótipo (__proto__)
 * que vem da propriedade prototype da função construtora que foi usada para
 * criá-lo. QUando tentamos acessar um membro de um objeto e depois a cadeia
 * de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
 */

const data = new Date();

console.dir(data);

// O prototype é um objeto que está automaticamente vinculado a todas as funções em JavaScript.
// Quando usamos uma função como construtora (com new), os objetos criados por ela herdam do prototype dessa função.

console.log(pessoa1.nomeCompleto());
console.log(Object.getPrototypeOf(pessoa1));
console.log(Pessoa.prototype);
