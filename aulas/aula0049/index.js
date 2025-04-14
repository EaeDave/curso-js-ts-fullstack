// Função geradora (Generator function)
// Cada vez a função for chamada, entregara um outro valor definido por yield

function* geradora1() {
    yield "Valor 1";

    yield "Valor 2";

    yield "Valor 3";
    // return
}

const g1 = geradora1();
console.log(g1.next());  // Retorna um objeto com os valores do retorno
console.log(g1.next().value);  // Justamente o valor do retorno
console.log(g1.next().value);  // Justamente o valor do retorno
console.log(g1.next());  // done = true

const g2 = geradora1();
for (valor of g2) {  // O for sabe exatamente onde acaba os retornos da função geradora
    console.log(valor);
    
}

function* geradora2() {  // Gerador infinito
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

const g3 = geradora2();

console.log(g3.next().value);  // 0
console.log(g3.next().value);  // 1
console.log(g3.next().value);  // 2
console.log(g3.next().value);  // 3
console.log(g3.next().value);  // 4
console.log(g3.next().value);  // 5

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();  // herdando yields de outra geradora
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);
console.log(g4.next().value);

function* geradora5() {
    yield function() {
        console.log("Vim do y1");
        
    };
    // ...
    yield function() {
        console.log('Vim do y2');
        
    }
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
