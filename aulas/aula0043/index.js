// IIFE -> Immediately invoked function expression
const nome = 'David';

(function(idade, peso, altura) {
    const nome = 'Rodrigues'
    console.log('IIFE');
    console.log(nome);

    function falaPropriedades() {
        console.log(idade, peso, altura);
        
    }

    falaPropriedades();
    
})(23, 70, 1.7);  // Essa função está sendo invocada imediatamente