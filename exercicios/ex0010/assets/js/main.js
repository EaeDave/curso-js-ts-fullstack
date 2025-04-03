const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let index = 0; index < elementos.length; index++) {
    // const tag = elementos[index].tag;
    // const texto = elementos[index].texto;
    
    const { tag, texto } = elementos[index];  // Atribuição por desestruturação
    const tagCriada = document.createElement(tag);
    
    tagCriada.textContent = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);  // Mais interessante adicionar toda a div no final, consome menos recursos