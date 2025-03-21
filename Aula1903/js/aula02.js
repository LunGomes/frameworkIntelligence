console.log('Operadores em JavaScript');

let primeiroNumero =  parseInt(Math.random()*100);
let segundoNumero = parseInt(Math.random()*10);
let resultado = 0;
console.log(primeiroNumero, segundoNumero);

// Operadores Aritméticos

// soma
resultado = primeiroNumero + segundoNumero;
console.log(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);

//subtração
resultado = primeiroNumero - segundoNumero;
console.log(`${primeiroNumero} - ${segundoNumero} = ${resultado}`);

//multiplicação
resultado = primeiroNumero * segundoNumero;
console.log(`${primeiroNumero} * ${segundoNumero} = ${resultado}`);

//divisão
resultado = primeiroNumero / segundoNumero;
console.log(`${primeiroNumero} / ${segundoNumero} = ${resultado}`);

//módulo
resultado = primeiroNumero % segundoNumero;
console.log(`${primeiroNumero} % ${segundoNumero} = ${resultado}`);

//potência
resultado = primeiroNumero ** segundoNumero;
console.log(`${primeiroNumero} ** ${segundoNumero} = ${resultado}`);

// Operadores relacionais
// Retorna apenas TRUE / FALSE
// No JavaScript, qualquer operação lógica ou de comparação (>, <, >=, <=, ==, ===, etc.) retorna automaticamente um valor booleano (true ou false). Como resultado recebe diretamente essa comparação, ele armazena o booleano correspondente.

console.log("Retorna apenas TRUE / FALSE")
//Maior que
resultado = primeiroNumero > segundoNumero;
console.log(`${primeiroNumero} > ${segundoNumero} = ${resultado}`);

//Menor que
resultado = primeiroNumero < segundoNumero;
console.log(`${primeiroNumero} < ${segundoNumero} = ${resultado}`);

//Maior ou igual a
resultado = primeiroNumero >= segundoNumero;
console.log(`${primeiroNumero} >= ${segundoNumero} = ${resultado}`);

//Menor ou igual a
resultado = primeiroNumero <= segundoNumero;
console.log(`${primeiroNumero} <= ${segundoNumero} = ${resultado}`);

// Igualdade - é igual?
resultado = primeiroNumero == segundoNumero;
console.log(`${primeiroNumero} == ${segundoNumero} = ${resultado}`);

// Não Igualdade - é diferente?
resultado = primeiroNumero != segundoNumero;
console.log(`${primeiroNumero} != ${segundoNumero} = ${resultado}`);


let n1 = 10;
let n2 = '10';

console.log("Tipo do valor da variável:")
console.log(n1, typeof(n1));
console.log(n2, typeof(n2));

console.log("Se o valor de n1 e n2 é igual em conteúdo:");
console.log(n1 == n2);
console.log("Se o valor (conteúdo digitado) e o tipo (string e number) de n1 e n2 é igual:");
console.log(n1 === n2);

console.log("n1 é diferente de n2 em relação apenas ao valor?");
console.log(n1 != n2);
console.log("n1 é diferente de n2 em relação ao valor e ao tipo?");
console.log(n1 !== n2);

// Operadores lógicos - interligam expressões 
//Sao: E(&&) OU(||) Não(!)
//Retorno é TRUE / FALSE

console.log("Operadores E(&&) OU(||) Não(!) que retornam TRUE / FALSE");

primeiroNumero =  50;
segundoNumero = 20;
resultado = (primeiroNumero >= 10) || (primeiroNumero >= 80);
console.log(`O primeiro número é >maior ou igual a 10< OU maior ou igual a 80: ${resultado}`);

resultado = (primeiroNumero >= 10) && (primeiroNumero >= 80);
console.log(`O primeiro número é >maior ou igual a 10< E maior ou igual a 80: ${resultado}`);
//                   (v) && !(f)
//                      f && V
console.log("Usando o operador de negação, que inverte o resultado booleano");

resultado = !((primeiroNumero >= 10) && !(primeiroNumero >= 80));
// primeiroNumero >= 10 é true
// primeiroNumero >= 80 era false, mas com o !() fica true
// o operador de negação ! exterior inverte o valor dos dos dois, já que ambos estavam true e retornaval como um único TRUE, resultando em FALSE.
console.log(resultado);