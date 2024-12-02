const fullName = 'Lucas Soares Valerio dos Santos'
console.log(fullName.length, 'conta caracteres') //.length conta caracter (conta a partir do 1)

const fruits = ['maça', 'pessego', 'uva', 'pera']
console.log(fruits.length, 'array')
console.table(fruits[fruits.length - 1]) //.table deixa o array mais bonito

const cortaNome = fullName.slice(0, 5) // .slice(num, num) determina que o length vai apartir do primeirto num até o segundo
console.log(cortaNome)

const transfomToArray = fullName.split(' ') //.split('caracter') quebra a linha toda vez que o caracter digitado aparecer
console.log(transfomToArray)

const lastName = transfomToArray[transfomToArray.length - 1] //.length -1 trás o ultimo array
console.log(lastName)

// função que pega o primeiro nome e de um 'Olá'
console.log(`Olá, ${transfomToArray[0]}`)


// função que ve se o nome valido
function FullName(name) {
    const cortaNome = name.split(' ')[0]

    return `Olá, ${cortaNome}, seja bem vindo`
}
console.log(FullName('Lucas Soares Valerio dos Santos'))

// função do imc
function GetIMC(peso, altura) {
    var cal = peso / (altura * altura)

    switch (cal) {
        case (cal < 22):
            console.log('Baixo peso')
        
        case (cal < 27):
            console.log('Normal')
        
        case (cal < 29.99):
            console.log('Sobrepeso')
        break       
    }
}

console.log(GetIMC(84, 1.81).toFixed(1))

