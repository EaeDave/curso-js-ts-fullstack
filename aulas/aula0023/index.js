const data = new Date();  // Função construtora | Gera um objeto | As datas são consideradas por milisegundos, desde 01/01/1970.
const tresHorasEmMs = 60 * 60 * 3 * 1000;
const dataUnix = new Date(0 + tresHorasEmMs);  // 01/01/1970 Timestamp unix ou época unix
const dataEspecifica = new Date(2019, 3, 20, 15, 14, 27, 500);  // ano, mes, dia, hora, minutos, segundos e milésimo de segundos
const dataEmString = new Date('2019-04-20 20:20:59.500');
console.log(data.toString());
console.log(dataUnix.toString());
console.log(dataEspecifica.toString());
console.log(dataEmString.toString());

console.log('Dia', dataEmString.getDate());  // Obtém o dia
console.log('Mês', dataEmString.getMonth() + 1);  // Obtém o mês (Janeiro começa no 0 e termina em Dezembro 11)
console.log('Ano', dataEmString.getFullYear());  // Obtém o ano

console.log('Hora', dataEmString.getHours());  // Hora
console.log('Minutos', dataEmString.getMinutes());  // Minutos
console.log('Segundos', dataEmString.getSeconds());  // Segundos
console.log('Milisegundos', dataEmString.getMilliseconds());  // Milisegundos
console.log('Dia da semana', dataEmString.getDay());  // Obtém o dia da semana (Domingo começa no 0, 6 - Sábado)

function zeroAEsquerda(numero) {  // Criando uma função para crescentar um zero a esquerda, caso o numero seja menor do que 10.
    return numero < 10 ? `0${numero}` : numero;
}

function formataData(data) {  // Criando uma função para exibir a data formatada
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());

    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
}

const dataNova = new Date();
const dataBrasil = formataData(dataNova);
console.log(dataBrasil);






