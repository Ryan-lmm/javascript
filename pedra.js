var elementos = document.querySelectorAll('.player-options div > img');
var inimigo = document.querySelectorAll('.enemy-options div > img');
var screen = document.querySelector('.screenScore h1');
var playerOpt = "";
var inimOpt = "";


function ganhador(){
    if(playerOpt == 'pedra'){
        if(inimOpt == 'pedra'){
            alert('empate')
        }else if(inimOpt == 'papel'){
            alert('inimigo ganhou')
        }else if(inimOpt == 'tesoura'){
            alert('player ganhou')
        }
    }

    if(playerOpt == 'papel'){
        if(inimOpt == 'papel'){
            alert('empate')
        }else if(inimOpt == 'tesoura'){
            alert('inimigo ganhou')
        }else if(inimOpt == 'pedra'){
            alert('player ganhou')
        }
    }
    if(playerOpt == 'tesoura'){
        if(inimOpt == 'tesoura'){
            alert('empate')
        }else if(inimOpt == 'pedra'){
            alert('inimigo ganhou')
        }else if(inimOpt == 'papel'){
            alert('player ganhou')
        }
    }

}

function opacityInimigo(){
    for(var i = 0; i < inimigo.length; i++){
        inimigo[i].style.opacity = 0.3;
    }
}

function inimigoJogar(){
    let rand = Math.floor(Math.random()*3)
    opacityInimigo();
    
    for(var i = 0; i < inimigo.length; i++){
        if(i == rand){
            
            inimigo[i].style.opacity = 1;
            inimOpt = inimigo[i].getAttribute('opt');
            alert(inimOpt)
        }
    }
}



function resetOpacity(){
    for(var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for(var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacity();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');
        alert(playerOpt)
        inimigoJogar();
        ganhador();
    })
}