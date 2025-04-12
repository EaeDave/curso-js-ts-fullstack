function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.teclaBotoes();
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                resultado = eval(conta);  // Eval converte uma string com expressões js e interpreta (Perigoso)
                if (!conta) {
                    alert('Conta inválida');
                    return
                }

                this.display.value = resultado;
                
            } catch (error) {
                alert('Conta inválida');
            }
        },
        

        cliqueBotoes() {
            document.addEventListener('click', (click) => {
                const elemento = click.target;

                if (elemento.classList.contains('btn-num')) {
                    this.btnParaDisplay(elemento.textContent);
                }

                if (elemento.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (elemento.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (elemento.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            });
        },

        teclaBotoes() {
            document.addEventListener('keydown', (key) => {
                console.log(key);
                this.teclaPressionada(key, '0');
                this.teclaPressionada(key, '1');
                this.teclaPressionada(key, '2');
                this.teclaPressionada(key, '3');
                this.teclaPressionada(key, '4');
                this.teclaPressionada(key, '5');
                this.teclaPressionada(key, '6');
                this.teclaPressionada(key, '7');
                this.teclaPressionada(key, '8');
                this.teclaPressionada(key, '9');
                this.teclaPressionada(key, 'Escape');
                this.teclaPressionada(key, 'Backspace')
                this.teclaPressionada(key, '(');
                this.teclaPressionada(key, ')');
                this.teclaPressionada(key, '/');
                this.teclaPressionada(key, '*');
                this.teclaPressionada(key, '+');
                this.teclaPressionada(key, '-');
                this.teclaPressionada(key, '.');
                this.teclaPressionada(key, 'Enter');

             
            });

        },
        teclaPressionada(tecla, valor) {
            if (tecla.key === valor) {
                if (tecla.key === 'Escape') {
                    this.clearDisplay();
                } else if (tecla.key === 'Backspace') {
                    this.apagaUm();
                } else if (tecla.key === 'Enter') {
                    this.realizaConta();
                } else {
                    this.btnParaDisplay(valor);  
                    
                }
            }
        },

        btnParaDisplay(botaoClicado) {
            this.display.value += botaoClicado;
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();