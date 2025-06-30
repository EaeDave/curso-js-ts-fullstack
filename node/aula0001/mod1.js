const nome = 'David';
const sobrenome = 'Rodrigues';
const idade = 23;
const nacionalidade = 'Brasileiro';

const falaNome = () => {
    console.log(nome, sobrenome);
};

// module é um objeto restrito ao Node, não existe no contexto do browser
// Forma tradicional de exportar módulos pelo Node
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;

// "Atalho" para exportar
exports.idade = idade;
exports.nacionalidade = nacionalidade;

// O this é atribuído ao contexto do export
this.frase = 'O rato roeu a roupa do rei de roma';


