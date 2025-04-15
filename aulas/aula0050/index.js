//                 0          1        2
// Valor por referência
const nomes = ["Eduardo", "Maria", "Joana"];
nomes[0] = "David";
console.log(nomes);
delete nomes[0];
console.log(nomes, nomes[0]);

// Funciona para Strings, Objetos, Funções, etc
const numeros = []  // Array literal
const frases = new Array("Olá, Mundo", "Bom dia!", "Boa tarde!", "Boa noite!");  // Construtor de array (Menos usado)
console.log(frases);

const meuArray = [1, 5, 10, 20];
const meuNovoArray = meuArray;  // Este array está referenciando outro, qualquer valor mudado neste o no outro altera ambos
meuNovoArray[0] = 5000;
console.log(meuArray);
const meuSpreadArray = [...meuNovoArray];  // Utilizando operador de rest, ou nesse contexto, spread operator, é feito uma cópia do valor
console.log(meuSpreadArray, meuArray);
meuSpreadArray[0] = "Olá";
console.log(meuSpreadArray[0], meuArray[0]);

// Convertendo string em array
const minhaString = "David Rodrigues da Silva";
const stringConvertidoEmArray = minhaString.split(" ");
console.log(stringConvertidoEmArray);

// Convertendo array em string
const arrayConvertidoEmString = stringConvertidoEmArray.join(' ');
console.log(arrayConvertidoEmString);







