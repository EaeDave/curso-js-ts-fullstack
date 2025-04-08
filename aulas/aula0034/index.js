function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new ReferenceError("x e y precisam ser números");  // Classe ou função construtora
    }
    return x + y
}

try {
    const somei = soma(5, 5)
    console.log(somei);
    const somei2 = soma(5, "5")  // O erro acontece aqui, então a linha de baixo nem executa
    console.log(somei2);
} catch (error) {  // O erro foi capturado
    console.log("Ocorreu um erro.")
}
