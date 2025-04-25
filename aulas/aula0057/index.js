// O método .forEach() itera apenas sobre arrays

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

a1.forEach(numero => (console.log(numero)));
let total = 0;
a1.forEach(numero => {
    total += numero;
});
console.log(total);



