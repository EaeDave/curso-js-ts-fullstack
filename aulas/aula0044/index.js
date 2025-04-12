// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, alt, pes) {
   return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    },

    // Setter
    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    },

    fala(assunto) {
        return `${nome} tem ${this.peso}KG e disse ${assunto}.`;  // this refere-se ao objeto em si
    },
    altura: alt,
    peso: pes,
    // Getter
    get imc() {  // O get faz a função se passar por atributo
        const imc = this.peso / (this.altura ** 2);
        return imc.toFixed(2);
    },
   };
}

const p1 = criaPessoa('David', 'Rodrigues', 1.70, 70);
console.log(p1.fala('Olá!'));
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Camila Rodrigues da Silva';

const p2 = criaPessoa('Alex', 'Rodrigues');
console.log(p2.nomeCompleto);
p2.nomeCompleto = 'Camila dos Santos e Santos';
console.log(p2.nomeCompleto);

console.log(p2.nome);
console.log(p2.sobrenome);




