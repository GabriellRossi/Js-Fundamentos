// Declaração De Função  

function soma(param){
  //bloco de código
}

soma("param")


// Expressão de função

const soma = function(n1, n2) {return n1 + n2}
console.log(soma(1,1));



// Diferença Principal: HOISING
// Funções e var são "listadas" no topo do arquivo

console.log(apresentar);

function apresentar() {
  return "Ola"
}



console.log(somaOutroExemplo(1, 1));
const somaOutroExemplo = function(n1, n2) {return n1 + n2}