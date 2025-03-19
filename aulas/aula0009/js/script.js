alert('Apenas uma mensagem.');  // É apenas um atalho de um objeto mais complexo chamado window (objeto que só existe dentro do navegador)
window.alert('Exemplo');
window.confirm('Deseja realmente apagar?');  // Método de confirmação em janela do navegador
window.prompt('Digite algo: ');

let valorDigitado = prompt('Digite algo: ');
alert(`Você digitou: ${valorDigitado}`);

let num1 = parseFloat(prompt('Digite o primeiro valor da soma: '));
let num2 = parseFloat(prompt('Digite o segundo valor da soma: '));
alert(`A soma entre ${num1} + ${num2} é = ${num1 + num2}`)