
// Tipos de dados 
// Primitivos
// strings: Representa uma sequência de caracteres, ou texto.
// - As strings são definidas entre aspas simples ('), aspas duplas (") ou crases (`) para template strings.

// number:
// - Representa tanto números inteiros quanto números de ponto flutuante (decimais).
// - JavaScript trata todos os números como number, sem distinção entre inteiros e decimais.
// exemplo:

let int = 10
console.log(int);
// console.log('A soma de int + 10 é igual a ' + (int + 10));

let soma = int + 10;
console.log(soma)
let subtracao = int - 10
console.log(subtracao)
let multiplicacao = int * 10
console.log(multiplicacao)
let divisao = int / 10
console.log(divisao)

// soma = prompt('digite um numero')
console.log(soma + 3)


let pontofloat = 10.5




let numString = '10'
console.log()
let somaString = numString + 2;
// O operador + concatena e soma 
// Concatena e soma palavras mais qualquer coisa e soma numeros.

console.log(somaString)
let subtracaoString = numString - 2;
console.log(subtracaoString)
let multiplicacaoString = numString * 2;
console.log(multiplicacaoString)
let divisaoString = numString / 2
console.log(divisaoString);

// Typeof identifica no console se é um numero ou uma string:
console.log(typeof divisaoString)


 


// 3. boolean:
// - Representa um valor lógico que pode ser `true` (verdadeiro) ou `false` (falso).

// null: Representa a ausência intencional de valor. Quando uma variável tem o valor null, isso significa que ela está vazia ou sem valor, mas foi definida como tal.


// undefined: Representa a ausência de valor. Quando uma variável é declarada, mas não inicializada, seu valor padrão é undefined.




// NaN (not a number) - Algo que foi produto de uma operacao matematica que nao pode gerar numeros.
let letra = 'k'
let subtracaoletra = letra - 2
console.log(subtracaoletra)

// qualquer coisa que e multiplicada ou dividida por NaN retorna NaN
let multiplicacaoLetra = letra * 2
console.log(multiplicacaoLetra)







// convertendo strings para number

let n1 = '10' //int
let n2 = '20.5' //float

// o js compreeende essas strings de numeros como numeros para operacoes matermaticas (subtracao,multiplicacao e divisao), mas nao para soma (realiza a concatenacao)
console.log(n1 + 1)
console.log(n2 - 1)

// para os caspo de operacoes de numeros mo formato de string precisamos converter a string para number(boa pratica) teremos:
// number
let numeroConvertido1 = Number(n1) //'10' -> 10
console.log(numeroConvertido1 + 3)
let numeroConvertido2 = Number(n2) //'20.5' -> 20.5
console.log(numeroConvertido2 + 5)




//parseint

//parsefloat


// exercicio de fixacao e exemplo pratico
// crie uma variavel que peça (prompt) o salario e converta para number (number(salario)).
//em seguida adicione mais 1000 dinheiros a esse salario e mostre o novo salario no consoke

let salario = prompt('Digite seu salario atual');
salario = Number(salario);
let novoSalario = salario + 1000;
console.log('Seu novo salário é ' + novoSalario);


