// similar to Python's range / see toolbox for complete version
function count(to){
    return [...new Array(to)].map( (_, i) => i + 1 )
}

async function getPokemons(){
    const pokeIndexes = count(40)
    const pokeUrls = pokeIndexes.map( i => `https://pokeapi.co/api/v2/pokemon/${i}`)
    const responses = await Promise.all(pokeUrls.map( url => fetch(url) ))
    const pokemons = await Promise.all(responses.map( response => response.json() ))
    return pokemons
}

export { getPokemons }