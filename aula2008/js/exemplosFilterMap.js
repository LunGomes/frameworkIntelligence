import { produtos } from "./objetos.js";

console.table(produtos);

// retornar um array com os nomes dos produtos
// usaremos o Map() para fazer a busca e a geração do novo array
// ELE NÃO ALTERA O ARRAY ORIGINAL

const nomesProdutos = produtos.map(produto => produto.nome);
console.table(nomesProdutos);

const categoriaProdutos = produtos.map(produto => produto.categoria);
console.table(categoriaProdutos);

// Criando um array com o nome e a categoria
// Estou usando o map pois ele percorre todo o array e retorna TODOS OS VALORES ENCONTRADOS
// MAP SEMPRE RETORNA UM ARRAY COM O MESMO TAMANHO DO ORIGINAL

const nomeCategoria = produtos.map(({nome, categoria}) => ({nome, categoria}));
console.table(nomeCategoria);

// filter() = retorno de um novo array conforme a condição que foi definida. ele mantém o array original intacto
// Buscar todos os produtos com categoria = Celular

const celulares = produtos.filter(produto => produto.categoria === 'Celular');
console.table(celulares);

// produtos com preços entre 1000 e 5000
const faixaPreco = produtos.filter(produto => produto.preco >= 1000 && produto.preco <= 5000);
console.table(faixaPreco);

const estoqueMaiorNove = produtos.filter(produto => produto.estoque > 9);
console.table(estoqueMaiorNove);

// find() Retorna APENAS o primeiro elemento que encontrar
// Verificar se existe Iphone nos objetos
const buscaIphone = produtos.find(produto => produto.nome.toLowerCase().includes('iphone'.toLowerCase()));
console.table(buscaIphone);

// startWith() - verifica se uma string começa com os caracteres desejados
const stringIniciaComFo = produtos.filter(produto => produto.nome.toLowerCase().startsWith('fo'.toLowerCase()));
console.table(stringIniciaComFo);

// endsWith() - verifica se uma string termina com os caracteres desejados 
// const finalO = produtos.filter(produto => produto.nome.toLowerCase().endsWith('o'.toLowerCase()));
// console.table(finalO);

// includes() - buscar uma string em qq parte do objeto
const buscaText = "pol";
const produtosEncontrados = produtos.filter(produto => produto.nome.toLowerCase().includes(buscaText.toLowerCase()));
console.table(produtosEncontrados);

// criando uma função - Dessa forma conseguimos buscar qualquer produto
function buscarProdutos(produtoBuscar) {
    return produtos.filter(produto => produto.nome.toLowerCase().includes(produtoBuscar.toLowerCase()))
}

// função precisa ser chamada para funcionar
console.table(buscarProdutos("sm"))
console.table(buscarProdutos("5"))