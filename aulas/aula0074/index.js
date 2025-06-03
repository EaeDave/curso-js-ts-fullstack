function tempoAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}


function aguarde(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(`A mensagem ${msg} não é uma string.`)
        setTimeout(() => {
        resolve(msg);
    }, tempo)
    });
}

aguarde('Frase 1', tempoAleatorio(1, 3))  // Paralelismo usando promisses (Código assíncrono)
    .then(resposta => {
        console.log(resposta);
        return aguarde('Frase 2', tempoAleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return aguarde('Frase 3', tempoAleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return aguarde(12345, tempoAleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(error => {
        console.log(error);
        
    })


console.log('Isso será exibido antes de qualquer promisse.');


// aguarde('Frase 1', tempoAleatorio(2, 5), () => {
//     aguarde('Frase 2', tempoAleatorio(2, 5), () => {
//         aguarde('Frase 3', tempoAleatorio(2, 5));
//     });
// });