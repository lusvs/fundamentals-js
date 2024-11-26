
// COMO CRIAR A FUNÇÃO
// function Saudacao() {
//     return console.log("Olá, Mundo!")
// }

// Saudacao()


// function Somar(numOne, numTwo) {
//     return numOne + numTwo
// }

// console.log(Somar(10, 30))

// function Multiplicar(numOne, numTwo) {
//     return numOne * numTwo
// }

// console.log(Multiplicar(18, 10))


// ========================================================
// FAZER O SITE SABER O TAMANHO DA TELA AUTOMATICAMENTE
// function MediaQuery(){
//     const getWidthScreen = window.innerWidth

//     if(getWidthScreen < 400) {
//         console.log('é mobile')
//     } else if (getWidthScreen > 400 && getWidthScreen < 780) {
//         console.log('é tablet')
//     } else {
//         console.log('é desktop')
//     }

// }

// MediaQuery()
// ========================================================

function ShortName(fullName) {

    const splitName = fullName.split(' ')
    // ['Lucas', 'Soares', 'Valerio', 'dos', 'Santos']

    const [firstName, ...rest] = splitName
    // [1, 2, 3, 4] = [1, ...rest] = [1, 2, 3]
    const lastName = rest[rest.lenght -1]
    console.log(lastName)
    return console.log(`${firstName}`)
}
ShortName('Lucas Soares Valerio dos Santos')

const name = 'Diego Sarti Viana'
const transform = name.split(' ')

const [first, ...rest] = transform
console.table(transform)
console.log(first)
console.log(rest)
