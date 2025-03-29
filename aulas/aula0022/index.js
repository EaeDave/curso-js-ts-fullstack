// ? :
// O ? retorna algo caso a expressão seja verdadeira
// O : retorna algo caso a expressão seja falsa
// É bom para encurtar código
// let variavel = (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const idade = 18;
const msg = idade >= 18 ? 'Maior de idade' : 'Menor de idade';
console.log(msg);

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario  >= 1000 ? 'Usuário VIP' : 'Usuário normal';  // Essa linha de código substitui um if pequeno

const corUsuario = null;
const corPadrao = corUsuario || 'black';  // variável com valor padrão ou fallback
console.log(nivelUsuario, corPadrao);

const nomeUsuario = null;
const nomeUsuarioLogado = nomeUsuario || 'Anonymous';  // Retorna o nome do user ou anonymous
console.log(nomeUsuarioLogado);


// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else {
//     console.log('Usuário normal');
// }
