// Exercício 1
console.log("-------------1----------------");
let alturaPes = 0;
let alturaRodadaMetros = 0;
let alturaMetros = 0;

for (let i = 0; i <= 15; i++) {
  alturaPes = 3 * i ** 2;
  alturaMetros += alturaPes * 0.3048;

  console.log(`A altura em metros no segundo ${i} é de ${alturaMetros} metros`);
}

// Exercício 2
console.log("-------------2----------------");
let limiteSuperior = Math.ceil(Math.random() * 20);
let limiteInferior = Math.ceil(Math.random() * 20);

let convertidoFahrenheit;

while (limiteInferior >= limiteSuperior) {
  limiteSuperior = Math.ceil(Math.random() * 20);
  limiteInferior = Math.ceil(Math.random() * 20);
}

console.log(`Limite inferior: ${limiteInferior}`);
console.log(`Limite superior: ${limiteSuperior}`);

for (let i = limiteInferior; i <= limiteSuperior; i++) {
  convertidoFahrenheit = (i * 1.8) + 32;
  console.log(`Celsius: ${i} --> Fahrenheit: ${convertidoFahrenheit.toFixed(2)}`);  
}

// Exercício 3
console.log("-------------3----------------");
let numeroSorteado = Math.ceil(Math.random() * 29);
let numerosQuadrado = 0;

for (i = 0; i <= numeroSorteado; i++) {
  numerosQuadrado = i ** 2;

  console.log(`O quadrado do número ${i} é ${numerosQuadrado}`);
}

// Exercício 4
console.log("-------------4----------------");
numeroSorteado = Math.floor(Math.random() * 51);
let numeroSorteado2 = Math.floor(Math.random() * 51);

while (numeroSorteado > numeroSorteado2) {
  numeroSorteado = Math.floor(Math.random() * 51);
  numeroSorteado2 = Math.floor(Math.random() * 51);
}

console.log(
  `Primeiro número sorteado: ${numeroSorteado}; Segundo número sorteado: ${numeroSorteado2}`
);

for (let i = numeroSorteado + 1; i < numeroSorteado2; i++) {
  console.log(i);
}

// Exercício 5
console.log("-------------5----------------");
numeroSorteado = Math.floor(Math.random() * 11);
let resultadoTabuada = 0;

for (let i = 0; i <= 10; i++) {
  resultadoTabuada = i * numeroSorteado;
  console.log(`${numeroSorteado} X ${i} = ${resultadoTabuada}`);
}

// Exercício 6
console.log("-------------6----------------");
let somatoriaAteCem = 0;

for (i = 1; i <= 100; i++) {
  console.log(i);

  somatoriaAteCem += i;
}
console.log(`Somatoria total de 1 a 100 = ${somatoriaAteCem}`);

// Exercício 7
console.log("-------------7----------------");
let sorteioPares = Math.ceil(Math.random() * 10);
console.log(`Quantos números pares devem ser exibidos: ${sorteioPares}`);

for (i = 2; i <= sorteioPares * 2; i = i + 2) {
  console.log(i);
}

// Exercício 8
console.log("-------------8----------------");
numeroSorteado = Math.floor(Math.random() * 101);
console.log(`Sorteado: ${numeroSorteado}`);

for (let i = 0; i <= numeroSorteado; i++) {
  if (i != 0 && i % 15 === 0) {
    console.log(i);
  }
}

// Exercício 9
console.log("-------------9----------------");
let totalPares = 0;
let totalImpares = 0;

for (let i = 0; i <= 199; i++) {
  numeroSorteado = Math.floor(Math.random() * 1001);

  if (numeroSorteado > 500) {
    // console.log(`Número par: ${numeroSorteado}`);
    totalPares++;
  } else {
    // console.log(`Número ímpar: ${numeroSorteado}`);
    totalImpares++;
  }
}
console.log(`Total de números pares: ${totalPares}`);
console.log(`Total de números ímpares: ${totalImpares}`);

// Exercício 10
console.log("-------------10----------------");
let maiores500 = 0;
let menores500 = 0;

for (let i = 0; i <= 199; i++) {
  numeroSorteado = Math.floor(Math.random() * 1001);

  if (numeroSorteado >= 500) {
    // console.log(`Maior ou Igual que 500: ${numeroSorteado}`);
    maiores500++;
  } else {
    // console.log(`Menor que 500: ${numeroSorteado}`);
    menores500++;
  }
}
console.log(`Total de maiores ou iguais que 500: ${maiores500}`);
console.log(`Total de menores que 500: ${menores500}`);

// Exercício 11
console.log("-------------11----------------");
let quantosEntre100e300 = 0;

for (let i = 0; i <= 199; i++) {
  numeroSorteado = Math.floor(Math.random() * 501);

  if (numeroSorteado >= 100 && numeroSorteado <= 300) {
    quantosEntre100e300++;
  }
}
console.log(
  `Total de quantos números entre 100 e 300 formam sorteados: ${quantosEntre100e300}`
);

// Exercício 12
console.log("-------------12----------------");
let sorteioDado = 0;
let somaDados = 0;

for (let i = 0; i <= 9; i++) {
  sorteioDado = Math.ceil(Math.random() * 6);

  console.log(`Valor do lançamento ${i + 1}: ${sorteioDado}`);
  somaDados += sorteioDado;
}
console.log(`Total da soma de todos os lançamentos: ${somaDados}`);

// Exercício 13
console.log("-------------13----------------");

for (let i = 0; i <= 9; i++) {
  let dividendo = (i + 1) * 2;
  console.log(`${i + 1}/${dividendo}`);
}

// Exercício 14
console.log("-------------14----------------");
totalPares = 0;
totalImpares = 0;
let totalSomatoriaImpares = 0;
let multiplosDe13 = 0;

for (let i = 0; i <= 19; i++) {
  numeroSorteado = Math.floor(Math.random() * 1000);

  console.log(`Sorteado: ${numeroSorteado}`);

  if (numeroSorteado % 2 === 0) {
    totalPares++;
  } else {
    totalSomatoriaImpares += numeroSorteado;
    totalImpares++;
  }

  if (numeroSorteado % 13 === 0) {
    multiplosDe13++;
  }
}

console.log(`Soma dos números ímpares: ${totalSomatoriaImpares}`);
console.log(
  `A quantidade de números múltiplos de 13 que foram sorteados: ${multiplosDe13}`
);
console.log(`A quantidade de números pares: ${totalPares}`);
console.log(`A quantidade de números ímpares: ${totalImpares}`);