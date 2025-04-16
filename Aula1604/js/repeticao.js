// Exemplo 01 - Sortear o número 95 em uma escala de 
// 0 a 100000
let numeroSorteado = Math.ceil(Math.random()*100000);
let quantidadeSorteios = 1;

console.log(numeroSorteado);

while(numeroSorteado !== 95) {
    numeroSorteado = Math.floor(Math.random()*100000);
    quantidadeSorteios++
}

console.log(numeroSorteado);
console.log(`Quantidade total de sorteios: ${quantidadeSorteios}`);

console.log('----------------------');

// Exemplo 02 - sortear 10 números
for(let i = 0; i <= 9; i++) {
    numeroSorteado = Math.ceil(Math.random()*1000);
    console.log(numeroSorteado);
}
console.log('----------------------');

// Exemplo 03 - fazer uma contagem de 0 a 100
for(let i = 0; i <= 100; i++){
    console.log(i);
}
console.log('----------------------');

// Exemplo 04 - fazer uma contagem de 100 a 0
for(let i = 100; i >= 0; i--){
    console.log(i);
}
console.log('----------------------');

// Exemplo 05 - sortear 10 números - exibir os números
// exibir a somatória deles
let totalSomatoria = 0;

for(let i = 0; i <= 9; i++) {
    numeroSorteado = Math.ceil(Math.random()*100);
    console.log(numeroSorteado);

    totalSomatoria += numeroSorteado;
}
console.log(`Total da somatória: ${totalSomatoria}`);
console.log('----------------------');

// Exemplo 06 - sortear 10 números
// exibir apenas os números pares
for(let i = 0; i <= 9; i++) {
    numeroSorteado = Math.ceil(Math.random()*100);

    // para se par, o resto do módulo com dividendo 2 deve ser 0
    if(numeroSorteado % 2 === 0) {
        console.log(numeroSorteado);
    } 
}

console.log('----------------------');