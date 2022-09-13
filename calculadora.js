var leia = require('readline-sync');

var n1 = leia.question('Digite o primeiro numero: ');
var n2 = leia.question('Digite o segundo numero: ');
var operador = leia.question('Digite o simbolo da operacao que deseja fazer: ');

if (operador == '+') {
    var somaFunc = require('./soma/soma');
    var resultado = somaFunc(n1, n2);
    console.log('Resultado da Adição: ', resultado);
} else if(operador == '-') {
    var subtracaoFunc = require('./subtracao/subtracao');
    var resultado = subtracaoFunc(n1, n2);
    console.log('Resultado da Subtração: ', resultado);
} else if(operador == '*') {
    var multiplicacaoFunc = require('./multiplicacao/multiplicacao');
    var resultado = multiplicacaoFunc(n1, n2);
    console.log('Resultado da Multiplicação: ', resultado);
} else if(operador == '/') {
    var divisaoFunc = require('./divisao/divisao');
    var resultado = divisaoFunc(n1, n2);
    console.log('Resultado da Divisão: ', resultado);
}