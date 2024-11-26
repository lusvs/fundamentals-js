
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

function MediaQuery(){
    const getWidthScreen = window.innerWidth

    if(getWidthScreen < 400) {
        console.log('é mobile')
    } else if (getWidthScreen > 400 && getWidthScreen < 780) {
        console.log('é tablet')
    } else {
        console.log('é desktop')
    }

}

MediaQuery()
