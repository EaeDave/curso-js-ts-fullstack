try {
    // É executada quando não há erros
    console.log("Abri um arquivo")
    console.log("Manipulei o arquivo e gerou error", a)
    console.log("Fechei o arquivo")  // Como na linha 4 gerou erro, não teria fechado o arquivo
} catch (error) {
    // É executada quando há erros
    console.log("Ocorreu um erro");
    
} finally {
    // Sempre
    console.log("FINALLY: Fechei o arquivo");  // Agora fechará o arquivo independentemente do try
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError("Esperando instância de Date.")
    }
    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString("pt-BR", )
}

try {
    const novaData = 5
    const data = new Date('01-01-1970 12:58:12')
    console.log(retornaHora(novaData));
} catch(error) {
    console.log("Ocorreu um erro", error);
}