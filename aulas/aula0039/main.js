function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaFuncao = falaFrase('Olá');
console.log(olaFuncao);

const olaMundo = olaFuncao('Mundo');
console.log(olaMundo);

// function duplica(n) {
//     return n * 2;
// }


// function triplica(n) {
//     return n * 3;
// }


// function quadriplica(n) {
//     return n * 4;
// }

function criaMultiplicador(multiplicador) {
    function multiplicacao(n) {
        return n * multiplicador;
    }

    return multiplicacao;
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(3));
console.log(quadriplica(4));



