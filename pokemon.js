//primeira requisição fetch
fetch('https://pokeapi.co/api/v2/pokemon?limit=6')
.then(response => response.json())
.then(pokemon =>{
     var pokemons = [];

     pokemon.results.map((val)=>{
          fetch(val.url)
          .then(response => response.json())
          .then(pokebola => {

               console.log(pokebola)
               pokemons.push({
                    nome: val.name,
                    imagem:pokebola.sprites.front_default,
                    habilidades : pokebola.moves[0].move.name,
               })

               if(pokemons.length == 6){
                    let boxes = document.querySelector('.poke-boxes');
                    boxes.innerHTML = "";
                    pokemons.map((val)=>{

                    boxes.innerHTML += `
                    
                    <div class="pokemonBox">
                         <img src="`+val.imagem+`" />
                         <h1>`+val.nome+`</h1>
                         <p style="text-align:center;">`+val.habilidades+`</p>
                    </div>              
                    
                    `;
                    

                    })
               }
          })
     })
})


/*<div class="pokemonBox">
                                        <img src="`+val.imagem+`" />
                                        <h1>`+val.nome+`</h1>
                                        <p style="text-align:center;">`+val.habilidades+`</p>
                                   </div>
                                   */