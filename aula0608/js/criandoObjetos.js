const alunos = {
    nome: 'Eu mesmo',
    curso: 'Web Design',
    rm: '128965',
    email: 'eumesmo@gmail.com',
    cursando: true
};

console.log(alunos);
console.log(alunos.curso);
console.log(alunos.nome);
console.log(alunos.cursando);

// exibindo na página
const nomeAluno = alunos.nome;

document.querySelector('#nome').textContent = nomeAluno;
document.querySelector('#curso').textContent = alunos.curso;

console.log(`Nome do aluno: ${nomeAluno}`);
console.log(`Curso do aluno: ${alunos.cursonomeAluno}`);
