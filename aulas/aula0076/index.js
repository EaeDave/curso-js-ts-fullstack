function tempoAleatorio(min=1, max=4) {
    min *= 1000;
    max *= 1000;
    
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}


function aguarde(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(`A mensagem ${msg} não é uma string.`)
            return;
        } 
        setTimeout(() => {
        resolve(msg.toUpperCase() + ' - Passei na promise');
    }, tempo)
    });
}

// Simulando sincronicidade com Promises
// aguarde('Frase 1', tempoAleatorio(1, 4))
//     .then(valor => {
//         console.log(valor);
//         return aguarde('Frase 2', tempoAleatorio(1, 4))
//     })
//     .then(valor => {
//         console.log(valor);
//         return aguarde('Frase 3', tempoAleatorio());
//     })
//     .then(valor => {
//         console.log(valor);
//         return aguarde(150, tempoAleatorio());
//     })
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(erro => console.log(erro));

async function executa() {
    try {
        const fase1 = await aguarde('Fase 1', tempoAleatorio());
        console.log(fase1);
        const fase2 = await aguarde(123 , tempoAleatorio());  // Ao encotnrar o erro, o resto para de executar e lança a exceção pelo catch
        console.log(fase2);
        const fase3 = await aguarde('Fase 3', tempoAleatorio());
        console.log(fase3);
        const fase4 = await aguarde('Fase 4', tempoAleatorio());
        console.log(fase4);
    } catch (erro) {
        console.log(erro);
    }
}

executa();

// pending -> pendente
// fullfilled - resolvida
// rejected -> rejeitada