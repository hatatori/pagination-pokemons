let total_pokemons = 649
let views = 50
let quant_buttons = Math.ceil(total_pokemons/views)


function generate_pokemons(start, end){
    pokemons.innerHTML = ""
    for(i=start;i<=end;i++){
        if(i!=0 && i <= total_pokemons )
        pokemons.innerHTML += `<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${i}.gif'>`
    }
}


function pagination(page, quantidade = 50){
    generate_pokemons(page*quantidade, page*quantidade+quantidade)
}

pagination(0, views)

for(j=0;j<quant_buttons;j++){
    buttons.innerHTML += `<button onclick="pagination(${j},${views})">${j+1}</button>`
}