function funcao() {
    console.log(arguments);  // argumentos é um objeto que armazena todos os argumentos passados para a função
    
}
funcao('Valor', 1, 2, 3, 4, 5);

function somar() {
    let total = 0;

    for (const numero of arguments) {
        total += numero;
    }
    return total;
}
console.log(somar(5, 5, 10, 20));

function subtrair(num1 = 0, num2 = 0) {  // Implementando valores padrão para parâmetros
    const resultado = num1 - num2;
    return resultado;
}

console.log(subtrair(5));

function conta(operador, acumulador, ...numeros) {  // rest operator
    for (const numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
    
}

conta('+', 0, 1, 2, 3, 4, 5);
conta('-', 0, 10, 5);

const falarArgumentos = (...args) => {
    for (argumento of args) {
        console.log(argumento);
        
    }
};

falarArgumentos('Oi', 'Olá', 1, 5, 10, 20);

