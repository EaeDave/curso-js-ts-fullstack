// Função recursiva
// Uma função recursiva em JavaScript (e em outras linguagens) é uma função que chama a si mesma dentro do seu corpo para resolver um problema.
function recursiva(max) {
    if (max > 10) return;
    console.log(max);
    max++;
    recursiva(max);  // A função re-chama ela mesma
    
}

recursiva(0);