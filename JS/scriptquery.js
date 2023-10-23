var valor = 0;

//Função de soma
function add(){
    valor ++;
    atualizaNumero();
}

//Função de subtração
function sub(){
    valor --;
    atualizaNumero();
}

//
function atualizaNumero(){
    var contador = document.getElementById("count");
    contador.textContent = valor;
}
