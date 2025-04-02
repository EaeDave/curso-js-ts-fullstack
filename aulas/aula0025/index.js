const verdadeira = true;  // Variável declarada no escopo global
let nome = 'David';  // Variável declarada no escopo global
var nome2 = 'David';  // Variável declarada no escopo global
// var TEM SOMENTE ESCOPO DE FUNÇÃO

// let nome = 'David';
var nome2 = 'Rodrigues';  // É possível redeclarar variáveis var

if (verdadeira) {
    let nome = 'Camila';  // Essa variável está declarada apenas no escopo do bloco if (Foi criada uma nova)
    console.log(nome, nome2);

    if (verdadeira) {
        var nome2 = 'Escopo global';  // Var redeclarado em escopo de bloco é movido para o escopo global
    }
    
}

{  // Isso é um bloco, e o código abaixo pertence somente ao escopo do mesmo, podendo herdar componentes do escopo global
    let nome = 'Jooj';  // Foi declarado no escopo do bloco, fora do mesmo, não existe esse valor
    console.log(nome, nome2);
    
}

console.log(nome, nome2);

FalaOi();  // Executando uma função antes dela ser declarada

function FalaOi() {  // Hoisting, a função foi elevado ao topo do código, então a chamada da função acima na verdade está abaixo.
    var numero = 5;  // var dentro do escopo de função, só é acessado pelo próprio escopo ou escopo filho
    console.log(numero);
    
}

// console.log(numero);


FalaOi();

if (verdadeira) {
    var meuNumero = 10;  // Utilizando var, é possível acessar a variável declarada no if fora do escopo
}

console.log(meuNumero);  // Exemplo
