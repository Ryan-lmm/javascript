/*<div style="border: 1px solid white;" class=single_produto>
            <h2>`+val.nome+`</h2>
            <span style = 'color:black'; 'font-size:24px'; 'font-weight:bold';>`+val.quant+`</span>
            <p>R$ `+val.valor+`</p>
</div>*/

var items = [];

document.querySelector('input[type=submit]')
.addEventListener('click', function(){
    var produto = document.querySelector('input[name=nome_produto]');
    var preco = document.querySelector('input[name=valor_produto]');
    var quantidade = document.querySelector('input[name=quantity]');

    items.push({
        nome : produto.value,
        valor : preco.value,
        quant : quantidade.value
    })

    let lista = document.querySelector('.lista');
    lista.innerHTML = "";
    var soma = 0;
    items.map(function(val){
        soma += parseInt(val.valor);
        lista.innerHTML += `
        
        <div style="border: 1px solid white;" class=single_produto>
            <h2>`+val.nome+`</h2>
            <span style = 'color:black'; 'font-size:24px'; 'font-weight:bold';>`+val.quant+`</span>
            <p>R$ `+val.valor+`</p>
        </div>

        `;
    })
    soma.toFixed(2)

    document.querySelector('.total').childNodes[1].textContent = 'Total:R$ '+soma;

})

var clean = document.querySelector('.limpar')
    .addEventListener('click', function(){
        items = [];
        soma = 0
        document.querySelector('.lista').innerHTML = ""
        document.querySelector('.total h1').innerHTML = "Total:R$ "+soma;
})


