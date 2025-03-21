let umaString = "Um \"texto\"";  // Escapando caracteres com barra invertida
console.log(umaString);
console.log("Exibindo uma barra invertida \\");

// Strings são indexads (Iteráveis)
//             01234
let meuNome = "David";
console.log("Exibindo meu nome = " + meuNome);
console.log("Exibindo a letra inicial do meu nome = " + meuNome[0]);
console.log("Exibindo a letra final do meu nome = " + meuNome[4]);
console.log(meuNome.charAt(1));  // Exibindo elemento do índice através de método (Ao tentar acessar um valor que não existe, não gera erro "undefined")
console.log(umaString.concat(' ', 'em um lindo dia'));  // Concatenando através de método

console.log(umaString.indexOf('texto'));  // Pega o primeiro índice da palavra que foi encotrada na string
console.log(umaString.indexOf('membro'));  // Caso não haja a palavra na string, retorna -1
console.log(umaString.indexOf('Um', 0));  // O segundo valor informado como parâmetro, refere-se a posição do index que deve começar a procurar

//                               012 345678 9
//                               Um \"texto\"
console.log(umaString.lastIndexOf('t', 1));  // Nesse caso ele fará o processo, porém pegando de trás pra frente, retornará -1 pois começara do index 1 "m" e depois escaneará o último index 0 "U"

console.log(meuNome.match(/[a-z]/g));  // Expressão regular para retornar todas as letras minúsculas

console.log(meuNome.search(/[i]/));  // Semelhante ao indexOf, porém aceita expressões regulares

console.log(meuNome.replace('vid', 'sus'));  // Substituindo trechos do texto
console.log(meuNome.replace(/[Da]/, 'Na'));  // Aceita expressões regulares
let outroTexto = 'o#rato#roeu#a#roupa#do#rei#de#roma';
console.log(outroTexto.replace(/[r]/g, '#'));  // Substitui todos os caracteres r para #

console.log(meuNome.length);  // Atributo que identifica o tamanho da string (qtd de caracteres)

console.log(meuNome.slice(1, 5));  // Fatiando strings, primeiro parâmetro é onde começa, segundo parâmetro é onde termina

console.log(meuNome.slice(-3));  //Fatiando strings começando de trás pra frente (índice)

let meuTextoSeparado = outroTexto.split('#');  // Separando palavras por caracteres em comum de separação (transforma palavras em array)
console.log(meuTextoSeparado[1], meuTextoSeparado[2]);

let nomeDoNinja = 'Kaique';
console.log(nomeDoNinja.toUpperCase());  // Transforma em caixa alta
console.log(nomeDoNinja.toLowerCase());  // Transforma em caixa baixa





