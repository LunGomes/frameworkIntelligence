let A = 10;
console.log(A);
let B = 20;
console.log(B);
let C = B/A;
console.log(C);
let D = C*A;
console.log(D);
let J = D+B+A;
console.log(J);
console.log('---------------------');

A = 30;
console.log(A);
B = -20;
console.log(B);
C = A - B;
console.log(C);
C = C + 10;
console.log(C);
let K = C * 2;
console.log(K);
console.log('---------------------');

A = 12; 
console.log(A);
B = A * 12;
console.log(B);
C = A * 12;
console.log(C);
B = C * 0;
console.log(B);
let L = B + 12;
console.log(L);
console.log('---------------------');

let P = 1000;
console.log(P);
let Q = 100;
console.log(Q);
let R = 10;
console.log(R);
let S = 1;
console.log(S);
let M = (P + Q + R + S) / Q;
console.log(M);
console.log('---------------------');

A = 10;
console.log(A);
B = A + 10;
console.log(B);
C = B + 10;
console.log(C);
D = C + 10;
console.log(D)
let N = D + 10;
console.log(N);
console.log('---------------------');

A = 10;
B = 9;
C = 15;
D = 10;
console.log(A === D);
console.log(A < B);
console.log(B > A);
console.log(A > C);
console.log((C > A) || (C === A));
console.log('---------------------');

console.log(A === B);
console.log((A === D) && (B > A));
console.log((A < C) || (A = B));
console.log((A === D) || (A === C) || (A === B));
console.log((A < B) && (D < A));
console.log('---------------------');

console.log(A === C);
console.log((B <= A) || (D > B));
console.log((A == A) && (D === B));
console.log((A + B) < (C + D));
console.log((A + B + C + D) > 0);
console.log('---------------------');

A = 8;
B = 2;
C = 6;
D = 1;
let resultado = ((A ** B) + (C % B)) - ((D * 2) + (D * 3) + (A * B % 4));
console.log(resultado);
console.log(resultado === 87);

resultado = (A + (C % 2)) - ((B * A) * 3) + D; 
console.log(resultado);
console.log('---------------------');

// Exercício do teste de mesa

a = 1;
b = 2;
c = 3;
x = -3;
y = -2;
z = -1;

x = 2 ** z;   // x = 2^(-1) = 0.5
y = x;        // y = 0.5
z = y;        // z = 0.5

a = b;        // a = 2
b = c;        // b = 3
c = b;        // c = 3

a = y;        // a = 0.5
b = a;        // b = 0.5
z = b;        // z = 0.5

a = b;        // a = 0.5
b = c;        // b = 3
y = b;        // y = 3

x = 2 ** 2;   // x = 4
y = 4 ** z;   // y = 4^(0.5) = 2
z = 6 + 5;    // z = 11

c = a;        // c = 0.5
a = b + 3;    // a = 3 + 3 = 6
c = b;        // c = 3

y = x + 1;    // y = 4 + 1 = 5
z = y;        // z = 5

a = b + 3;    // a = 3 + 3 = 6
b = c;        // b = 3
c = b + 5;    // c = 3 + 5 = 8

a = y;        // a = 5
b = a - 2;    // b = 5 - 2 = 3
z = b;        // z = 3

a = b - 4;    // a = 3 - 4 = -1
b = c;        // b = 8
y = b - 6;    // y = 8 - 6 = 2
c = a - 1;    // c = -1 - 1 = -2

a = c;        // a = -2
b = a + 1;    // b = -2 + 1 = -1
y = x;        // y = 4
z = y;        // z = 4

a = b + 2;    // a = -1 + 2 = 1
b = c;        // b = -2
c = b + 3;    // c = -2 + 3 = 1

a = y;        // a = 4
b = a - 1;    // b = 4 - 1 = 3
z = b;        // z = 3

a = b + 3;    // a = 3 + 3 = 6
b = c;        // b = 1
y = b + 2;    // y = 1 + 2 = 3

console.log(a, b, c, x, y, z);
console.log('---------------------');

// Scripts básicos de lógica


let numeroSorteado =  parseInt(Math.random()*101); // vai do 0 ao 100, incluindo eles
let numeroSucessor = numeroSorteado + 1;
let numeroAntecessor = numeroSorteado - 1;

let numeroAcrescido = numeroSorteado + (numeroSorteado * 0.15) //adiciona 15% --> 0.15 = 15%

let numeroDesconto = numeroSorteado - (numeroSorteado * 0.25) //desconta 25% --> 0.25 = 25%

let numeroSorteado2 =  parseInt(Math.random()*101);
let numeroSorteado3 =  parseInt(Math.random()*101);
let triplicarSoma = 3 * (numeroSorteado + numeroSorteado2 + numeroSorteado3)

let somaDoisValores = numeroSorteado + numeroSorteado2;
let produtoDoisValores = numeroSorteado * numeroSorteado2;
let quocienteDoisValores = numeroSorteado / numeroSorteado2;

let nota1 = parseInt(Math.random()*11);
let nota2 = parseInt(Math.random()*11);
let nota3 = parseInt(Math.random()*11);
let mediaAritmeticaNotas = (nota1 + nota2 + nota3) / 3;

let valorProduto = parseInt(Math.random()*1001);
let porcentagemDesconto = parseInt(Math.random()*51);
let valorDesconto = valorProduto * (porcentagemDesconto / 100);
let valorFinalProduto = valorProduto - valorDesconto;

console.log
(`1)
Número antecessor: ${numeroAntecessor} 
Número sorteado: ${numeroSorteado}
Número sucessor: ${numeroSucessor}

2) Número acrescido (+ 15%): ${numeroAcrescido}

3) Número com desconto (- 25%): ${numeroDesconto}

4)
1º Número sorteado: ${numeroSorteado}
2º Número sorteado: ${numeroSorteado2}
3º Número sorteado: ${numeroSorteado3}

Triplo da soma dos números sorteados: ${triplicarSoma}

5) 
1º Número sorteado: ${numeroSorteado}
2º Número sorteado: ${numeroSorteado2}

Soma dos valores : ${somaDoisValores}
Produto dos valores : ${produtoDoisValores}
Quociente dos valores : ${quocienteDoisValores}

6) 
Nota 1: ${nota1}
Nota 2: ${nota2}
Nota 3: ${nota3}

Média aritmética das notas: ${mediaAritmeticaNotas}

7)
Preço do produto: ${valorProduto}
Porcentagem de desconto dado: ${porcentagemDesconto}
Valor do desconto: ${valorDesconto}
Valor final do produto com o desconto: ${valorFinalProduto}
`
);
console.log('---------------------');

