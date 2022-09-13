var leia = require('readline-sync');

var n1 = parseInt(leia.question('Digite o primeiro numero: '));
var n2 = parseInt(leia.question('Digite o segundo numero: '));
var operador = leia.question('Digite o simbolo da operacao que deseja fazer: ');



function operacao(operador) {

    let retorno;
    if (operador == "+") {
        return console.log(soma(n1, n2));
    } else if (operador == "-") {
        return console.log(subtracao(n1, n2));
    } else if (operador == "*") {
        return console.log(multiplicacao(n1, n2));
    } else if (operador == "/") {
        return console.log(divisao(n1, n2));
    }

    console.log('Resultado da operacao: ', retorno)
}

operacao(operador);

function soma(n1, n2) {
    return n1 + n2;
}

function subtracao(n1, n2) {
    return n1 - n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function divisao(n1, n2) {
    return n1 / n2;
}