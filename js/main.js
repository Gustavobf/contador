var numero = document.querySelector("#numeroContador");
var botaoSoma = document.querySelector("#btnSoma");
var botaoSubtracao = document.querySelector("#btnSubtracao");

botaoSoma.addEventListener("click", soma);
botaoSubtracao.addEventListener("click", subtracao)
    
var contador = parseInt(numero.textContent);

function soma() {
    contador += 1;
    numero.textContent = contador;
}

function subtracao() {
    contador -= 1;
    numero.textContent = contador;
}