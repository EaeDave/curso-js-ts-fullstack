class ControleRemoto {
    static minhaPropriedadeDeClasse = 'Sou uma propriedade de classe e sou acessada somente pela classe, e não pela instância.';

    constructor(tv) {  // Propriedades que só existem durante a existência do objeto
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância
    aumentarVolume() {
        this.volume +=2;
    }

    // Método de instância
    // Referente ao objeto
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático
    // 
    static trocaPilha() {
        console.log('Pilha trocada.');
        
    }
}

const controle1 = new ControleRemoto('LG');
console.log(controle1);
controle1.aumentarVolume();
console.log(controle1);
controle1.aumentarVolume();
console.log(controle1);
controle1.diminuirVolume();
console.log(controle1);
// controle1.trocaPilha();  Geraria um erro, pois só pode ser acessado pela classe, e não pelo objeto da classe.
ControleRemoto.trocaPilha();  // Exemplo feito
console.log(ControleRemoto.minhaPropriedadeDeClasse);
console.log(controle1.minhaPropriedadeDeClasse);  // undefined pois não existe na instância.
