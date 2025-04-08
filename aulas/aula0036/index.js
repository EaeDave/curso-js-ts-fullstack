function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString("PT-BR")
}

function funcaoDoInterval() {
    console.log(mostraHora());
    
}

const ms = 1000
const secondsToExecuteCode = 2 * ms
const timer = setInterval(() => console.log(mostraHora()), secondsToExecuteCode);  // Fica em loop executando de tempos em tempos

const secondsToStopCode = 7 * ms
setTimeout(() => clearInterval(timer), secondsToStopCode)  // Põe um timer para executar

setTimeout(() => console.log("Hello, World!"), 10000)

