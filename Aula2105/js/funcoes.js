// Função simples - sem parâmetro e não tem retorno 
function exibirMensagem() {
    // corpo da função 
    console.log(`Bem vindo ao mundo das funções`);
    console.log(`Eu sou uma função simples`);
    console.log(`---------------------------------`);
};
// chamada da função
exibirMensagem();


// Funções com parâmetros
// Parâmetro é um valor, ou um conjunto de valores, que serão usados na função
// Parâmetro é passado para a função
// Parâmetro é como se fosse uma variável
function cumprimentarUsuarios(nome) {
    console.log(`Olá, ${nome}, bom dia!!`);
    console.log(`---------------------------------`);
};
// chamada da função
// Quando chama a função e passa um valor do parâmetro, esse valor será chamado de argumento
cumprimentarUsuarios('Luana'); // Precisa passar o valor do parâmetro -> o argumento
cumprimentarUsuarios('Carlos'); // argumento = Carlos


// Função com retorno
// Ela processa e retorna o resultado desse processamento
// O retorno pode ser usada em qualquer parte do script
function calcularAreaRetangulo(largura, altura) {
    // const area = largura * altura; -> return area;
    return largura * altura;    
};
// Chamando a função para calcular as áreas
let area1 = calcularAreaRetangulo(3, 5);
let area2 = calcularAreaRetangulo(23, 28);
let area3 = calcularAreaRetangulo(2, 45);
let mediaAreas = (area1 + area2 + area3)/3;     
console.log(area1, area2, area3);
console.log(`---------------------------------`);


// Funções anonimas não tem nome
// São atribuídas a uma variável
const dizerAdeus = function(nome) {
    console.log(`Até mais tarde, ${nome}`);
    console.log(`---------------------------------`);
};
dizerAdeus('Zenon');
dizerAdeus('Maria');
dizerAdeus('João');

// Arrow function() - Surgiu no Ecmascript 6
// Em funções curtas(pequenas) e principal em CALLBACK(chama uma função, ela interrompe o seu processamento, enquanto uma outra função é chamada por ela)
// Calcular o dobro de um número
const dobrarNumero = (numero) => numero * 2; 
console.log((dobrarNumero(2)), (dobrarNumero(50)));
console.log(dobrarNumero(150));

// Arrow com mais parâmetros
// Somar números
const somaNumeros = (a = 0, b = 0 , c = 0) => a + b + c;
console.log(somaNumeros(3, 6, 7)); // Não precisa passar todos os números

// Exibir a data atual
const dataAtual = () => {
    const dataDeHoje = new Date();
    console.log(`Hoje é dia ${dataDeHoje}`);
};
dataAtual();