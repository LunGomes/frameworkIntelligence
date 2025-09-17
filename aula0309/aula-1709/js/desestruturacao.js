import { produtos } from "./objetos.js";

// Desestruturação
// Forma reduzida de coletar dados de um Array(indice),
// ou de objetos, pegando as propriedades
const numeros = [10, 20, 30]; 
const a = numeros[0];
const b = numeros[1];
const c = numeros[2];

console.log(a,b,c);


// usando desestruturação em arrays
const [x, y, z] = numeros;
console.log(x);
console.log(y);
console.log(z);


// pulando um valor
const [primeiroValor, ,terceiroValor] = numeros;
console.log(primeiroValor);
console.log(terceiroValor);

// Desestruturação de Objetos
//retornar as propriedades desejadas
const pessoa = { user : 'Tati', idade: 37};

// sem desestruturação
const user1 = pessoa.user;
const idade1 = pessoa.idade;
console.log(user1, idade1);

// com desestruturação
const {user, idade} = pessoa;
console.log(user, idade);

console.log(produtos);

const {nome:nomeProduto, preco:precoProduto} = produtos;
console.log(nomeProduto, precoProduto);

// Spread operator - representado por '...'
// Ele pega todos os valores do array e passa para outra estrutura
const arrayNumeros = [4, 5, 6, 7];
console.log(arrayNumeros);

const copiaNumeros = [1, 2, 3, ...arrayNumeros, 10, 11, 12];
console.log(copiaNumeros);

arrayNumeros.push(8);
console.log(arrayNumeros);
console.log(copiaNumeros);

console.table(produtos);
const novoProduto = {
    id: 31,
    nome: 'Produto XPTO',
    categoria: 'Foguete espacial',
    preco: 999.99,
    estoque: 20,
};

const produtosAtualizados = [...produtos, nomeProduto];
console.log(produtosAtualizados.length);
console.table(produtos.length);

// Somar todos os preços dos produtos utilizando reduce
const totalPreco = produtos.reduce((acc, { preco }) => acc + preco, 0);
console.log(totalPreco.toFixed(2));

// Criar um array apenas com os nomes dos produtos usando reduce
const nomesProdutos = produtos.reduce((novoArray, { nome }) => {
    novoArray.push(nome);
    return novoArray;
}, []);

console.log(nomesProdutos);