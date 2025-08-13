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

