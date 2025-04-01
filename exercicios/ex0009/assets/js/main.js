function getDiaDaSemanaTexto(diaDaSemana) {
    let diaDaSemanaTexto;

    switch(diaDaSemana) {
        case 0:
            diaDaSemanaTexto = 'Domingo';
            return diaDaSemanaTexto;
        case 1:
            diaDaSemanaTexto = 'Segunda';
            return diaDaSemanaTexto;
        case 2:
            diaDaSemanaTexto = 'Terça';
            return diaDaSemanaTexto;
        case 3:
            diaDaSemanaTexto = 'Quarta';
            return diaDaSemanaTexto;
        case 4:
            diaDaSemanaTexto = 'Quinta';
            return diaDaSemanaTexto;
        case 5:
            diaDaSemanaTexto = 'Sexta';
            return diaDaSemanaTexto;
        case 6:
            diaDaSemanaTexto = 'Sábado';
            return diaDaSemanaTexto;
        default: '';
    }
}

// function getFormataMesTexto(mes) {
//     let textoMes;

//     switch (mes) {
//         case 0:
//             textoMes = 'Janeiro';
//             return textoMes;
//         case 1:
//             textoMes = 'Fevereiro';
//             return textoMes;
//         case 2:
//             textoMes = 'Março';
//             return textoMes;
//         case 3:
//             textoMes = 'Abril';
//             return textoMes;
//         case 4:
//             textoMes = 'Maio';
//             return textoMes;
//         case 5:
//             textoMes = 'Junho';
//             return textoMes;
//         case 6:
//             textoMes = 'Julho';
//             return textoMes;
//         case 7:
//             textoMes = 'Agosto';
//             return textoMes;
//         case 8:
//             textoMes = 'Setembro';
//             return textoMes;
//         case 9:
//             textoMes = 'Outubro';
//             return textoMes;
//         case 10:
//             textoMes = 'Novembro';
//             return textoMes;
//         case 11:
//             textoMes = 'Dezembro';
//             return textoMes;
    
//         default:
//             break;
//     }
// }

function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
        'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];
}

function getDataFormatadaTexto(data) {
    const dia = formataZeroAEsquerda(data.getDate());
    const mes = getNomeMes(data.getMonth());
    const ano = formataZeroAEsquerda(data.getFullYear());
    return `${dia} de ${mes} de ${ano}`;
}

function getHoraFormatada(data) {
    const hora = formataZeroAEsquerda(data.getHours());
    const minutos = formataZeroAEsquerda(data.getMinutes());
    return `${hora}:${minutos}`;
}

function formataZeroAEsquerda(numero) {
    return numero < 10 ? `0${numero}` : numero;
}


const data = new Date();
const mes = data.getMonth();
const diaDaSemana = data.getDay()
const dataFormatada = getDataFormatadaTexto(data);
const horaFormatada = getHoraFormatada(data);
// const mesFormatado = getFormataMesTexto(mes);
console.log(getDiaDaSemanaTexto(diaDaSemana), dataFormatada, horaFormatada);

const headerPrincipal = document.querySelector('.container h1');

headerPrincipal.innerHTML = `${getDiaDaSemanaTexto(diaDaSemana)}, ${getDataFormatadaTexto(data)} ${getHoraFormatada(data)}`;

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };

// h1.innerHTML = data.toLocaleString('pt-BR', opcoes);