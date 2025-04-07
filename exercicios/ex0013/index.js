/**
 * Escreva uma função que recebe um número e
 * retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número NÃO é divisível por 3 e 5 = Retorna o próprio número
 * Checar se o número é realmente um número
 * Use a função com números de 0 a 100
 */

function fizzBuzz(numero=0) {
    const divisivelPor3 = numero % 3 === 0;
    const divisivelPor5 = numero % 5 === 0;

    if (typeof numero !== "number") return numero;
    

    if (divisivelPor3 && divisivelPor5) {
        return "FizzBuzz";
    } else if (divisivelPor3) {
        return "Fizz";
    } else if (divisivelPor5) {
        return "Buzz";
    } else if (!divisivelPor3 && !divisivelPor5) {
        return numero;
    }
}


// console.log(fizzBuzz(15));

for (let i = 0; i < 100; i++) {
    console.log(i, fizzBuzz(i));
    
}
