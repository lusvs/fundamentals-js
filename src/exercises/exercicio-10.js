// Exercício 10: Reverter uma string
// Dada uma string, use um loop para imprimi-la de trás para frente.

let str = 'exemplo';
let reversa = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversa += str[i];
}
console.log(reversa);