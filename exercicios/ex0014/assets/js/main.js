const container = document.querySelector(".container");
const startButton = container.querySelector("#iniciar");
const stopButton = container.querySelector("#pausar");
const zeroButton = container.querySelector("#zerar");
const timerCountH1 = container.querySelector("#timerCount")

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;


function formataZeroAEsquerda(numero) {
    return numero <= 9 ? `0${numero}` : numero
}


function updateDisplay() {
    timerCountH1.innerHTML = formatTime()
}


function formatTime() {
    if (seconds > 59) {
        seconds = 0
        minutes += 1
    } else if (minutes > 59) {
        minutes = 0
        hours += 1
    }

    let formatedTimer =`${formataZeroAEsquerda(hours)}:${formataZeroAEsquerda(minutes)}:${formataZeroAEsquerda(seconds)}`;
    return formatedTimer;
}



function startTimer() {
    clearInterval(timer)  // Garantindo que não haverá timer rodando antes desse
    timerCountH1.setAttribute("style", "color: black");
    timer = setInterval(() => {seconds++, updateDisplay()}, 1000);
}

function stopTimer() {
    
    setTimeout(() => clearInterval(timer), 0);
    timerCountH1.setAttribute("style", "color: red");
}

function zerarTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    timerCountH1.setAttribute("style", "color: black");
    
}

document.addEventListener("click", function (mouseEvent) {
    const elementoClicado = mouseEvent.target;

    if (elementoClicado === startButton) {
        startTimer();
    }

    if (elementoClicado === stopButton) {
        stopTimer();
    }

    if (elementoClicado === zeroButton) {
        zerarTimer();
    }
})

    
// startButton.addEventListener("click", startTimer);

// stopButton.addEventListener("click", stopTimer);

// zeroButton.addEventListener("click", zerarTimer);
