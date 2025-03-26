/**
 * && -> false && true -> false "o valor mesmo"
 * 
 * FALSY -> 0 '' "" `` null undefined NaN
 */

// Em javascript tudo pode ser avaliado como verdadeiro ou falso
console.log('David Rodrigues' && true && 'Camila');  // Retorna o último valor verdadeira no circuito
console.log('David' && 0 && 'Camila');  // Retorna o valor 0, pois foi o primeiro falsy identificado no circuito

function falaOi() {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());  // Retorna falso, o curto-circuito fecha

const executou = true;
console.log(executou && falaOi());  // Retorna Oi

console.log(vaiExecutar || falaOi());  // Retorna Oi

const corUsuario = null;  // Usuário não selecionou nenhuma cor
const corPadrao = corUsuario || 'preto';  // Se o valor da corUsuario for false/falsy, retorna preto como padrão
console.log(corPadrao);
