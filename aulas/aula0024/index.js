function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda';
            break;
        case 2:
            diaSemanaTexto = 'Terça';
            break;
        case 3:
            diaSemanaTexto = 'Quarta';
            break;
        case 4:
            diaSemanaTexto = 'Quinta';
            break;
        case 5:
            diaSemanaTexto = 'Sexta';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default:
            diaSemanaTexto = '';
            break;
    }

    return diaSemanaTexto;
}

function formataZeroAEsquerda(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

function getDataFormatada(data) {
    const dia = formataZeroAEsquerda(data.getDate());
    const mes = formataZeroAEsquerda(data.getMonth() + 1);
    const ano = formataZeroAEsquerda(data.getFullYear());
    return `${dia}/${mes}/${ano}`;
}

const data = new Date();
const diaSemana = data.getDay();
const dataFormatada = getDataFormatada(data);

console.log(getDiaSemanaTexto(diaSemana), dataFormatada);


// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sábado';
// } else {
//     diaSemanaTexto = '';
// }