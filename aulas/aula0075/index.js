function tempoAleatorio(min, max) {
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

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
    'Primeiro valor',
    aguarde('Promise 1', 3000),
    aguarde('Promise 2', 500),
    aguarde('Promise 3', 1000),
    aguarde(1000, 1000),  // Essa promise geraria um erro, por ser um int e não str no primeiro parâmetro
    'Outro valor'
];

Promise.all(promises)  // Resolve todas as promises encadeadas por um array de uma vez só
    .then(valor => {
        console.log(valor);
    })
    .catch(function(erro) {  // Caso alguma das promises do array dê um erro (reject), retornará somente o erro e não os resolve
        console.log(erro);
    });

    const promises2 = [
    aguarde('Promise 1', 3000),
    aguarde('Promise 2', 500),  // Essa vai ser retornada na Promise.race()
    aguarde('Promise 3', 1000),
];

Promise.race(promises2)  // É uma corrida, a primeira promise a ser resolvida vai ser a que vai ser retornada.
    .then(valor => {
        console.log(valor);
        
    })
    .catch(valor => {
        console.log(valor);
        
    });


function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return aguarde('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => console.log(dadosPagina))
    .catch(e => console.log(e));