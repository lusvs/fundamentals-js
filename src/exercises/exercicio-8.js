// Exercício 8: Contar números ímpares entre 1 e 50
// Crie um loop que conte quantos números ímpares existem entre 1 e 50 e imprima o resultado.

let contador = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        contador++;
    }
}

console.log(contador);