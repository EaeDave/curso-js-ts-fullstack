// Polimorfismo
// Métodos se comportarem de forma diferente em subclasses (classes filhas)

// Superclass
{
    function Conta(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    };


    Conta.prototype.sacar = function(valor) {
        if (this.saldo < valor) {
            console.log(`Você tentou sacar R$ ${valor.toFixed(2)}\nSaldo insuficiente.`);
            this.verSaldo();
            return;
        };

        this.saldo -= valor;
        console.log(`Você sacou R$ ${valor.toFixed(2)}.`);
        
        this.verSaldo();
    };


    Conta.prototype.depositar = function(valor) {
        this.saldo += valor;
        console.log(`Você depositou R$ ${valor.toFixed(2)}.`);
        this.verSaldo();

    };

    Conta.prototype.verSaldo = function() {
        console.log(`Ag/c: ${this.agencia}/${this.conta} | Seu saldo é de R$ ${this.saldo.toFixed(2)}`);
    };
}

// ContaCorrente
{
    function ContaCorrente(agencia, conta, saldo, limite) {
        Conta.call(this, agencia, conta , saldo);  // Herdando as propriedades da "classe" Conta
        this.limite = limite;
    };

    ContaCorrente.prototype = Object.create(Conta.prototype);  // Herdando os métodos do prototype de Conta
    ContaCorrente.prototype.constructor = ContaCorrente;  // Atribuindo o construtor ContaCorrente, já que foi herdado o construtor Conta


     ContaCorrente.prototype.sacar = function(valor) {  // Polimorfismo sendo aplicado, um mesmo método se comportando de maneira diferente
        if ((this.saldo + this.limite) < valor) {
            console.log(`Você tentou sacar R$ ${valor.toFixed(2)}\nSaldo insuficiente.`);
            this.verSaldo();
            return;
        };

        this.saldo -= valor;
        console.log(`Você sacou R$ ${valor.toFixed(2)}.`);
        
        this.verSaldo();
    };

}

// ContaPoupanca
{
     function ContaPoupanca(agencia, conta, saldo) {
        Conta.call(this, agencia, conta , saldo);  // Herdando as propriedades da "classe" Conta
    };

    ContaPoupanca.prototype = Object.create(Conta.prototype);  // Herdando os métodos do prototype de Conta
    ContaPoupanca.prototype.constructor = ContaPoupanca;  // Atribuindo o construtor ContaCorrente, já que foi herdado o construtor Conta


    ContaPoupanca.prototype.sacar = function(valor) {
        if (this.saldo < valor) {
                console.log(`Você tentou sacar R$ ${valor.toFixed(2)}\nSaldo insuficiente.`);
                this.verSaldo();
                return;
            };

        if (valor > 50) {
            console.log(`Você tentou sacar R$ ${valor.toFixed(2)}\nLimite de R$50,00 por saque.`);
                this.verSaldo();
                return;
        };

        this.saldo -= valor;
        console.log(`Você sacou R$ ${valor.toFixed(2)}.`);
        
        this.verSaldo();
    };

    

}


const conta1 = new Conta(11, 22, 100);
const conta2 = new ContaCorrente(33, 44, 0, 100);
const conta3 = new ContaPoupanca(55, 66, 0);
conta3.depositar(100);
conta3.sacar(25);
conta3.sacar(51);
