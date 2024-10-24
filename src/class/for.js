// loop
// for (i = 0; i <=5; i = i + 1) {
//     console.log(i)
// }

// let int = 1
// Incremento Pós 
// int = int + 1 (int++)
// console.log(int++, 'antes de pós')
// Incremento pré
// console.log(++int,'Depois de pós')

// Operador de Subtração - Decremento
// let dec = 10
// Incremento Pós
// dec = dec + 1 (dec--)
// console.log(dec--, 'pós')
// Incremento pré 
// console.log(--dec, 'pré')

// for (i = 1; i <= 20; i++) {
//     if(i % 2 === 0) {
//         console.log(i, 'é par!')
//     }
//     else{
//         console.log(i, 'é impar')
//     }
// }

const products = [{
    name: 'Camisa',
    price: 25
}, {
    name: 'Calça',
    price: 60
}, {
    name: 'Chapéu',
    price: 15
}]

// for (let product of products) {
//     console.log(product.name + ' custa ' + product.price + ' reais')
// }

let total = 0
// soma todos os produtos e para
for(let product of products) {
    // total = total + product.price
    total += product.price
}
console.log('A soma total dos produtos é: ' + total + ' reais')
