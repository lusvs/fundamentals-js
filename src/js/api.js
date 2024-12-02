fetch('https://viacep.com.br/ws/05763450/json/')
    //metodo de quando da certo    
    .then(response => { 
       return response.json();
    }) 
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Erro: ', error))

function getCEP(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    // informações da API, exemplo: status, headers
    .then(res => res.json()) 
    // retorna os dados, o que eu solicitei
    .then(data => console.log(data))
    // retorna o erro
    .catch(error => console.error('Error:', error))
}

getCEP('05763450')

    // const obj = {
    //     name: 'Maria',
    //     age: 20
    // }

    // obj.age

    // const{ age, name } = obj
    // console.log(age)