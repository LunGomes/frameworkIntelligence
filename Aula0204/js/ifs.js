console.log("-----------------------EXERCÍCIO O2------------------------------");

// Sortear dois números - exibi-los na tela - mostrar o maior

let primeiroNumero = parseInt(Math.random()*100); // Math tem que ser com M maiusculo
let segundoNumero = parseInt(Math.random()*100); // Math tem que ser com M maiusculo
console.log(primeiroNumero, segundoNumero);

if (primeiroNumero > segundoNumero){
    console.log(`${primeiroNumero} é o maior número sorteado - TRUE`);
} else if(segundoNumero > primeiroNumero){
    console.log(`${segundoNumero} é o maior número sorteado - FALSE`);
} else {
    console.log(`Os números são iguais`);
}

console.log("-----------------------EXERCÍCIO O2------------------------------");

// Sortar um valor entre 0 e 1000 - representando o preço de um produto
// Sorteia um valor entre 0 e 2 - representando o desconto a ser aplicado no produto
//  Se valor for 0 - desconto 0%
//  Se valor for 1 - desconto 10%
//  Se valor for 2 - desconto 20%
// Exibir: Preço do produto - Desconto aplicado - Valor com desconto

let precoProduto = Math.random()*1001; 
let desconto = Math.random()*3;
let valorDesconto = 0;
let precoFinal = 0;

if (desconto === 0){
    precoFinal =precoProduto;
} else if (desconto === 1){
    valorDesconto = precoProduto * 0.1;
    precoFinal = precoProduto - valorDesconto;
} else {
    valorDesconto = precoProduto * 0.2;
    precoFinal = precoProduto - valorDesconto;
}

console.log(`Preço do produto: ${precoProduto.toFixed(2)}`);  // O toFixed deixa com casas decimais
console.log(`Valor do desconto: ${valorDesconto.toFixed(2)}`);
console.log(`Valor final do produto: ${precoFinal.toFixed(2)}`);