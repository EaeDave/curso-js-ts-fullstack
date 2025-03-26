function meuEscopo() {
    const form = document.querySelector('.form');  // Armazenando o formulário em uma variável
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    // form.onsubmit = function(evento) {
    //     evento.preventDefault();
    //     alert('Você é foda hein bicho!');
    //     console.log('Foi enviado');
        
    // };



    function recebeEventoForm(evento) {  // Criando uma função que recebe o formulário
        evento.preventDefault();  // faz com que o formulário não se comporte de forma padrão (enviando dados e recarregando a página)
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {  // Criando o objeto pessoa
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,

            escreverResultadoNaDiv() {  // Método pra escrever resultado
                resultado.innerHTML += `<p>${this.nome} ${this.sobrenome} ${this.peso} ${this.altura}</p>`;
            }
        };

        pessoas.push(pessoa);
        pessoa.escreverResultadoNaDiv();
        console.log(pessoas);
        
    };

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();