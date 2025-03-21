// Usando o console do browser
console.log('Usando o console');
console.log('Errando');

// criando variáveis
// variáveis em JS NÃO POSSUEM TIPO

let nomeUsuario = 'Israel Marques';
let idUsuario = 789456;
let emailUsuario = 'profisrael@fiap.com.br';
let logado = true;
let dataNascimento = '02/12';

console.log(nomeUsuario, typeof(nomeUsuario));
console.log(idUsuario, typeof(idUsuario));
console.log(emailUsuario, typeof(emailUsuario));
console.log(logado, typeof(logado));
console.log(dataNascimento, typeof(dataNascimento));

// Concatenação - USAR APÓS A MORTE
console.log('Nome do Usuario: ' + nomeUsuario + ' logado: ' + logado);

//Usando Template String - USAR SEMPRE
//Iniciar e terminar com o sinal de crase ``
//Placeholder = chamar as variáveis + métodos + funções + objetos
console.log(`Nome do usuário: ${nomeUsuario} - logado: ${logado}`);




