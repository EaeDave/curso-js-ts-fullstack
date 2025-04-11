// Funções de callback (Executam após alguma ação acontecer/finalizar)

function geraTimer(min = 1000, max = 3000) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    return numeroAleatorio;
}

function f1(callback) {
    const timerAleatorio = geraTimer();
    setTimeout(() =>{  // Aqui já é uma função de callback, pois só executará depois que os 1000ms passarem
        console.log(`Demorou: ${timerAleatorio/1000}s para carregar`);
        console.log('f1');
        try {
            if (callback) callback();
        } catch (erro) {
            console.log('É necessário passar como argumento da função uma outra função de callback.', erro);
            
        }
        
    }, timerAleatorio);
    
}
function f2(callback) {
    const timerAleatorio = geraTimer();
    setTimeout(() =>{  // Aqui já é uma função de callback, pois só executará depois que os 1000ms passarem
        console.log(`Demorou: ${timerAleatorio/1000}s para carregar`);
        console.log('f2');
        if (callback) callback();
        
    }, timerAleatorio);
    
}
function f3(callback) {
    const timerAleatorio = geraTimer();
    setTimeout(() =>{  // Aqui já é uma função de callback, pois só executará depois que os 1000ms passarem
        console.log(`Demorou: ${timerAleatorio/1000}s para carregar`);
        console.log('f3');
        if (callback) callback();
        
    }, timerAleatorio);
    
}
f1(()=> {  // callback hell
    f2(() => {
        f3(() => {
            console.log('Olá, mundo!');
        });
    });
});

f1(5);

