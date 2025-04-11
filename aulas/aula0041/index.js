// Closure é a habilidade que uma função tem de acessar o escopo léxico
function retornaFuncao() {
    const nome = 'David';  // Essa variável está no Closure da função interna abaixo

    return function() {
        return nome;  // Essa função consegue acessar variáveis no escopo dos parents dela (lexical scope)
    }
}

const funcao = retornaFuncao();
console.log(funcao());
