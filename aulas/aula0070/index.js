class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`O dispositivo ${this.nome} já está ligado.`);
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`O dispositivo ${this.nome} já está desligado.`);
            return;
        }

        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
console.log(d1);

// Herdando uma classe
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);  // Herdando a propriedade nome da classe pai
        this.cor = cor;  // Acrescentando novas propriedades a classe filha
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('Xiaomi', 'Preto', 'Poco X6');
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar.');
        
    }

    falarOi() {
        console.log('Oi :)');
        
    }
}

const t1 = new Tablet('Samsung', true);
console.log(t1);
t1.ligar();
t1.falarOi();

class Ninja {
    constructor(nome, aldeia) {
        this.nome = nome;
        this.aldeia = aldeia;
    }
}

class Uchiha extends Ninja {
    constructor(nome, aldeia) {
        super(nome, aldeia)
        this.sharinganAtivo = false;
    }

    ativarSharingan() {
        if (this.sharinganAtivo) {
            console.log('Sharingan já está ativo.');
            return;
        };
        this.sharinganAtivo = true;
    }
}

const sasuke = new Uchiha('Sasuke', 'Folha');
console.log(sasuke);
sasuke.ativarSharingan();
console.log(sasuke);



