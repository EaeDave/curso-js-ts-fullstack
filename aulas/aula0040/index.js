// Lexical Scope
// Escopo léxico se refere ao escopo da função e o escopo dos Parents da função
const nome = 'David';

function falaNome() {  // A função sempre lembra onde ela foi declarada e seus vizinhos
    const nome = 'Rodrigues';
    console.log(nome); 
}

function usaFalaNome() {
    const nome = 'Camila';
    falaNome();
}

falaNome();  // Na chamada da função, respeitará a ordem na qual a função foi estruturada