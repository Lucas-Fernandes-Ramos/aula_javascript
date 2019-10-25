
function soma(valor, valor2){
    return valor + valor2;
}

console.log(soma(10,20));

var valida = 0;

function validaIdade(idade) {

      if(idade >= 18){
          valida = true;
      }else{
          valida = false;
      }
      return valida
}

var idade = prompt("Digite sua idade");
console.log(validaIdade(idade));


