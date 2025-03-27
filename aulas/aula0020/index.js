const hora = 0;

if (hora < 12) {  // Se tal condição for verdadeira, será executado a linha de código do bloco entre chaves {}
    console.log('Bom dia!');
} else if (hora >= 12 && hora < 18) {  // Senão se
    console.log('Boa tarde!');
} else if (hora > 23.59) {
    console.log('Hora inválida!');
} else {  // Senão
    console.log('Boa noite!');
}