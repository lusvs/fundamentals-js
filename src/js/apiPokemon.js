
function getPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(res => res.json())
        .then((data) => {
            const { name, sprites, weight } = data;
            const div = document.getElementById('pokemon-info')
            
            div.innerHTML = `
                <h2>${name}</h2>
                <img src="${sprites.front_default}" alt=">
                <p>${weight}</p>
            `
        })
        .catch((error) => console.error("O erro é:", error));
}
getPokemon('articuno')

