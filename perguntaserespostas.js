var perguntas = document.querySelectorAll('input[type=radio]');

for(var i = 0; i < perguntas.length; i++){
    perguntas[i].addEventListener('change', function(t){
        let correta = t.target.value;
        var parentNode = t.target.parentNode;
        if(correta == 'correta'){
            let els = parentNode.parentNode.querySelectorAll('[type=radio]')
            parentNode.style.background = "green";
            
           for(e = 0; e < els.length; e++){
           els[e].disabled = true;
           }
        }else if(correta == 'incorreta'){   
            let els = parentNode.parentNode.querySelectorAll('[type=radio]')
            parentNode.style.background = "red";
            
           for(e = 0; e < els.length; e++){
           els[e].disabled = true;
           }

           let typeCor = parentNode.parentNode.querySelector('[value=correta]')
           typeCor.parentNode.style.backgroundColor = 'green';
            
        }

    })
}