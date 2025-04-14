function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
        
    };

    this.capturaCliques = () => {
        document.addEventListener("click", (event) => {
            const elemento = event.target;

            if (elemento.classList.contains("btn-num")) this.addNumDisplay(elemento);
            if (elemento.classList.contains("btn-clear")) this.clear();
            if (elemento.classList.contains("btn-del")) this.del();
            if (elemento.classList.contains("btn-eq")) this.realizaConta();
            
        });
    };

    this.capturaEnter = () => {
        document.addEventListener("keypress", (event) => {
            event.preventDefault();
            const teclaPressionada = event.key;

            if (teclaPressionada === "Enter") {
                this.realizaConta();
            }
        })
    }

    this.addNumDisplay = element => this.display.value += element.textContent;

    this.clear = () => this.display.value = "";

    this.del = () => {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.realizaConta = () => {
        try {
            const resultado = eval(this.display.value);

            if (!resultado) {
                alert("Conta inválida");
                return;
            }

            this.display.value = resultado;
        } catch (error) {
            alert("Conta inválida");
            return;
        }
    }
    
}

const calculadora = new Calculadora();
calculadora.inicia();