const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const numero of numeros) {
    if (numero === 2 || numero === 5){
        continue;  // continue retorna para o início do laço (pula o laço)
    }

    if (numero === 7) {
        console.log(`O número ${numero} foi encontrado!`);
        break;  // Quebra o laço ou sai do laço
    }

    console.log(numero);
}