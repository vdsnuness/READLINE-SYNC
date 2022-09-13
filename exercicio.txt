var leia = require('readline-sync');

var n1 = parseInt(leia.question('Digite o primeiro numero: '));
var n2 = parseInt(leia.question('Digite o segundo numero: '));
var operador = leia.question('Digite o simbolo da operacao que deseja fazer: ');



function operacao(n1, n2, operador) {

    let retorno;
    if (operador == "+") {
        retorno = n1 + n2;
    } else if (operador == "-") {
        retorno =  n1 - n2;
    } else if (operador == "*") {
        retorno = n1 * n2;
    } else if (operador == "/") {
        retorno = n1 / n2;
    }

    console.log('Resultado da operacao: ', retorno)
}

operacao(n1, n2, operador);