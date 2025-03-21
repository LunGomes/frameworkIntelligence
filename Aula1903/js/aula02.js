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

// Igualdade
resultado = primeiroNumero == segundoNumero;
console.log(`${primeiroNumero} == ${segundoNumero} = ${resultado}`);

// Não Igualdade
resultado = primeiroNumero != segundoNumero;
console.log(`${primeiroNumero} != ${segundoNumero} = ${resultado}`);


let n1 = 10;
let n2 = '10';

console.log(n1, typeof(n1));
console.log(n2, typeof(n2));

console.log(n1 == n2);
console.log(n1 === n2);

console.log(n1 != n2);
console.log(n1 !== n2);

// Operadores lógicos - interligam expressões 
//Sao: E(&&) OU(||) Não(!)
//Retorno é TRUE / FALSE


primeiroNumero =  50;
segundoNumero = 20;
resultado = (primeiroNumero >= 10) || (primeiroNumero >= 80);
console.log(resultado);

resultado = (primeiroNumero >= 10) && (primeiroNumero >= 80);
console.log(resultado);
//                   (v) && !(f)
//                      f && V
resultado = !((primeiroNumero >= 10) && !(primeiroNumero >= 80));
console.log(resultado);