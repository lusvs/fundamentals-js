// Estrutura condicionadas
// const a = 10

// if (a > 8) {
//     return console.log('O número é maior que 8!')
// } else {
//     return console.log('O numero é menor que 8')
// }

const time = 'Vasco'

// else if
if (time === 'Corinthans') {
    console.log('Seu time é o Corinthans') 
} else if (time === 'São Paulo') {
    console.log('Seu time é o São Paulo')
} else {
    console.log('Não encotramos seu time no nosso banco de dados!')
}


// const age = 17

// // ternário
// let ofGreater = age >= 18 ? console.log('Você é de maior') : console.log('Você é de menor')

// //expressão com AND(e)
// let onlyGreater = age >= 18 && console.log('mostra site')

// exercicio if
// abaixo de 4 = reprovado
// se a pessoa tirou 4 a 5 = recuperação 
// 6 a 9 = aprovado
// 10 = execelente

// const nota = 10

// if (nota <= 3) {
//     console.log('Reprovou')
// }  
// else if (nota >= 4 && nota <= 5) {
//     console.log('Recuperação')
// } 
// else if (nota >= 6 && nota <= 9) {
//     console.log('Aprovado')
// } 
// else{
//     console.log('Excelente')
// }

//switch cade
// const fruit = 'Laranja'
// switch(fruit){
//     case 'Laranja':return console.log('Vc é de boas');
//     case 'Morango': return console.log('Vc é de romantico');
//     default: return console.log('Não temos o significado dessa fruta');
// }

const nota = 3
switch(nota) {
    case nota === 3: return console.log('Vc é Burro, REPROVADO');
    case nota >= 4 && nota <= 5: return console.log('Toma vergonha e vai estudar, RECUPERAÇÃO');
    case nota >= 6 && nota <= 9: return console.log('Vv consegue mais, PASSOU');
    default: return console.log('Muito bom, EXCELENTE');
}