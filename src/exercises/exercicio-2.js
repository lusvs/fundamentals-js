// Exercício 2: Imprimir números pares entre 1 e 20
// Crie um loop que imprima apenas os números pares de 1 a 20.

for (i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i, 'é par')
    }
    else{
        console.log(i, 'é impar')
    }
}