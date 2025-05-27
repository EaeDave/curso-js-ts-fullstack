const falar = {
    falar() {
        console.log(`Oi, eu sou o ${this.nome + " " + this.sobrenome} e tenho ${this.idade} anos de idade.`);
    }
};

const comer = {
    comer() {
        console.log('Crunch!');
    }
};

const beber = {
    beber() {
        console.log('Gulp!');
        
    }
};

const pessoaPrototype = {...falar, ...comer, ...beber}

function criaPessoa(nome, sobrenome, idade) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome, enumerable: true},
        sobrenome: {value: sobrenome, enumerable: true},
        idade: {value: idade, enumerable: true}
    })
        // nome,
        // sobrenome,
        // idade,
        
        // falar() {  Foi removido esses métodos daqui, pois consome muito recurso de memória para cada objeto que for criado.
        //     console.log(`Oi, eu sou o ${this.nome + " " + this.sobrenome} e tenho ${this.idade} anos de idade.`);
        // },
        // comer() {
        //     console.log('Crunch!');
            
        // },
        // beber() {
        //     console.log('Gulp!');
            
        // }
}

const p1 = criaPessoa('David', 'Rodrigues', 23)
console.log(p1);
p1.falar();
p1.comer();
p1.beber();