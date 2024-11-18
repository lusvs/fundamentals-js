// Exercício 7: Encontrar o maior número em um array
// Dado um array de números, use um loop para encontrar e imprimir o maior número.

let numeros = [3, 5, 7, 2, 8, 10, 1];
let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}
console.log(maior);