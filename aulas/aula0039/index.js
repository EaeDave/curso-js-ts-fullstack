// return
// Retorna um valor
// Termina a função
function soma(a, b) {
    return a + b

}


function soma2(a, b) {
    console.log(a + b);
    
}

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

const p1 = criaPessoa('David', 'Rodrigues');
console.log(p1);

const p2 = criaPessoa('Camila', 'Santos');
console.log(p2);




const minhaSoma = soma(5, 5);  // Valores retornados podem ser armazenados em variáveis
console.log(minhaSoma);

soma2(5, 5);  // A função não retorna nada, então se armazenada em variável, retorna undefined
const minhaSoma2 = soma2(5, 5);  // const minhaSoma2 tornou-se undefined
console.log(minhaSoma2);  // undefined

document.addEventListener('click', (pointerEvent) => {  // Essa função não retorna nada
    const elementoClicado = pointerEvent.target;
    const numerosHexadecimais = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += numerosHexadecimais[Math.floor(Math.random() * 16)];
    }

    elementoClicado.style.backgroundColor = cor;
});
