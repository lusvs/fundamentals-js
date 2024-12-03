
function getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(res => res.json())
        .then((data) => {
            const {name,sprites, weight} = data;
            const nome = `Nome: ${name}`;
            const peso = `Peso: ${weight}`;
            const linkFoto = `link da foto: ${sprites.front_default}`;
            console.log(nome);
            console.log(peso);
            console.log(linkFoto);
        })
        // .catch(err => console.error('O erro é:', err))
}
getPokemon()

