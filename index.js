var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samantha = window.document.getElementById("Samantha")

var setaDireita = window.document.getElementById("setaDireita")
var setaEsquerda = window.document.getElementById("setaEsquerda")

function RolarParaDireita() {

    Leonardo.style = 'display:none';
    Bruna.style = 'display:flex';
    
    setaDireita.style = 'display:none';
    setaEsquerda.style = 'display:flex; margin-top:40%px ';
    
    }


function RolarParaEsquerda() {    
    Bruna.style = 'display:none'
    Leonardo.style = 'display:flex'

    setaDireita.style = 'display:flex'
    setaEsquerda.style = 'display:none'

}