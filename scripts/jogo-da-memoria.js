// console.log("Rebecca - Teste de JavaScript!")

// Array constante
const deck = [
    {
        "id": 1,
        "name": "1.png",
        "src": "./images/deck/1.png"
    },
    {
        "id": 2,
        "name": "2.png",
        "src": "./images/deck/2.png"
    },
    {
        "id": 3,
        "name": "3.png",
        "src": "./images/deck/3.png"
    },
    {
        "id": 4,
        "name": "4.png",
        "src": "./images/deck/4.png"
    }, 
    {
        "id": 5,
        "name": "5.png",
        "src": "./images/deck/5.png"
    },
    {
        "id": 6,
        "name": "6.png",
        "src": "./images/deck/6.png"
    },
    {
        "id": 7,
        "name": "6.png",
        "src": "./images/deck/6.png"
    },
    {
        "id": 8,
        "name": "5.png",
        "src": "./images/deck/5.png"
    },
    {
        "id": 9,
        "name": "4.png",
        "src": "./images/deck/4.png"
    },
    {
        "id": 10,
        "name": "3.png",
        "src": "./images/deck/3.png"
    },
    {
        "id": 11,
        "name": "2.png",
        "src": "./images/deck/2.png"
    },
    {
        "id": 12,
        "name": "1.png",
        "src": "./images/deck/1.png"
    }
]

// Variáveis
var jogo = document.getElementById("jogo-da-memoria")
var divCard = null
var img = null

deck.forEach( carta => {
    divCard = document.createElement("div")
    divCard.setAttribute("class", "card")
    divCard.setAttribute("id", carta.id)
    divCard.setAttribute("onclick", "minha_funcao()")

    //Frente das cartas (oculto)
    tagImg = document.createElement("img")
    tagImg.setAttribute("src", carta.src)
    tagImg.setAttribute("alt", carta.name)
    tagImg.style.display = "none"
    divCard.appendChild(tagImg)

    //Verso das cartas (visível)
    tagImg = document.createElement("img")
    tagImg.setAttribute("src", "./images/deck/back.png")
    tagImg.setAttribute("alt", "verso")
    tagImg.style.display = "block"
    divCard.appendChild(tagImg)

    jogo.appendChild(divCard)
})

// inner = Está dentro do HTML
// jogo.innerHTML += 
// `<div class="card">
//     <img src="?" alt="Carta 1">
// </div>`

function minha_funcao() {
    var card = document.getElementById(event.currentTarget.id)

    for(var i = 0; i < card.children.length; i++)
    {
        if(card.children[i].style.display == "none") //Apaga o elemento na tela 
        { 
          card.children[i].style.display = "block" //Mostra o elemento na tela
          continue
        }  
        if(card.children[i].style.display == "block") 
        { 
          card.children[i].style.display = "none"
          continue
        }
    }
    // card.style.visibility = "hidden" //Tornando a carta invisível
    pontuar(++pontuacao)
}

//Definindo variável do recorde
var record = localStorage.getItem("record");
if (record == null){
    record = 0
}

//Definindo variável da pontuação
var pontuacao = 0 //Pontuação inicial

function pontuar(pontos){
    var spanPontuacao = document.getElementById("pontuacao")
    spanPontuacao.innerHTML = pontos
    
    //Se meu último for maior que o atual, atualize-o.
    if(pontos > record)
    {
        record = pontos
        localStorage.setItem("record", record);
    }

    var spanRecord = document.getElementById("record")
    spanRecord.innerHTML = record
}
pontuar(pontuacao) //Executando função criada acima

function reset() {
    for(var i = 0; i < jogo.children.length; i++){
        var carta = jogo.children[i]

        //Para cada imagem da carta, frente e verso
        for( var j = 0; j < carta.children.length; j++)
        {
          if(carta.children[j].getAttribute("alt") == "verso")
          {
            carta.children[j].style.display = "block"
          }
          else{
            carta.children[j].style.display = "none"
          }
        }
    }
    pontuacao = 0
    pontuar(pontuacao)
}


var person = prompt("Insira seu nome para jogar:", "");

if (person != null){
    document.getElementById("demo").innerHTML = "Bem-vindo(a) " + person + " e bom jogo! ";
}