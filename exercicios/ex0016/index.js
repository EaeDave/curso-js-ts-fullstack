function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')  // Adicionando um getter para retornar o CPF sem caracteres
        }
    })
};

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.calculaDigito(cpfParcial);
    const digito2 = this.calculaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    
    
    return novoCpf === this.cpfLimpo;
};


ValidaCPF.prototype.calculaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((acumulador, valor) => {
        // console.log(regressivo, val, regressivo * val);
        acumulador += regressivo * Number(valor);
        regressivo--;

        return acumulador;
    }, 0);

    let digito = 11 - (total % 11);

    return digito > 9 ? '0' : String(digito);
    
};


ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
    return sequencia;
    
};

const cpf = new ValidaCPF('063.813.017-40');
console.log(cpf.valida());



