const pessoas = ['Eu', 'Tu', 'Ele', 'Nós', 'Vós', 'Eles'];
const excluidos = [];
console.log(pessoas);
console.table(pessoas);

// Exibindo HTML
document.querySelector('#arrayPessoas1').textContent = pessoas;

// Inserir uma nova pessoa no início do array
pessoas.unshift('Eu Mesmo no inicio');
document.querySelector('#arrayPessoas2').textContent = pessoas;

// Excluir o primeiro valor do array - CUIDADO ELE EXCLUI MESMO
excluidos.push(pessoas.shift());
// pessoas.shift();
document.querySelector('#arrayPessoas3').textContent = pessoas;

// Inserir no fim do array 
pessoas.push('Eu mesmo no fim');
document.querySelector('#arrayPessoas4').textContent = pessoas;

// Excluir a última posição do array - CUIDADO ELE EXCLUI MESMO
excluidos.push(pessoas.pop());
// pessoas.pop();
document.querySelector('#arrayPessoas5').textContent = pessoas;

// Excluindo os dois valores partindo do indíce 2
pessoas.splice(2, 2); // primeiro número é o indíce que começa, o segundo é a quantidade de excluídos
document.querySelector('#arrayPessoas6').textContent = pessoas;
// Obs: Se colocar '0', esvazia tudo de uma vez

// Inserir dois valores partindo do indíce 2 (Sem excluir, só add no meio do array)
pessoas.splice(2, 0, 'Ele', 'Nós');
document.querySelector('#arrayPessoas7').textContent = pessoas;

// Excluir 3 pessoas e inserir 2 pessoas novas
pessoas.splice(1, 3, 'Tati', 'Rafael')
document.querySelector('#arrayPessoas8').textContent = pessoas;
