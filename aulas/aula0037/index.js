// Declaração de função (Function hoisting)
falaOi();  // Executando antes da declaração

function falaOi() {
    console.log("Oi");
}

// First-class objects (Objetos de primeira classe)
// Function expression
const falaOla = function () {  // Declarando dessa forma não ocorreu o hoisting
    console.log("Olá");
}

falaOla();  // A chamada da função deve vir depois da declaração da mesma

function executaFuncao(funcao){  // Função que recebe outra função como parâmetros e executa ela
    funcao();
}

executaFuncao(falaOla);

// Arrow function
const arrow = () => {
    console.log("Sou uma arrow function");
}

const anomFunction = function() {
    console.log("Sou uma anonymous function");
}

executaFuncao(arrow);
executaFuncao(anomFunction);

// Dentro de um objeto
const obj = {
    falar: function() {  // É possível declarar métodos de objetos dessa forma
        console.log("Estou falando");
    },

    dormir() {  // E direto
        console.log("Dormindo...");
        
    }
}

obj.falar();
obj.dormir();