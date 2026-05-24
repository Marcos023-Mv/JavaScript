let nomeAluno = prompt("Qual é o nome do aluno?");
let nota1 = prompt(`Digite a primeira nota do ${nomeAluno}:`);
let nota2 = prompt(`Digite a segunda nota do ${nomeAluno}:`);
let nota3 = prompt(`Digite a terceira nota do ${nomeAluno}:`);
let n1Convertida = Number(nota1);
let n2Convertida = Number(nota2);
let n3Convertida = Number(nota3);
let media = (n1Convertida + n2Convertida + n3Convertida) / 3;
if (media >= 5) {
    alert(`Parabéns! ${nomeAluno} foi aprovado com média ${media}!`);
}
else if (media < 3) {
    alert(`Aluno ${nomeAluno} foi reprovado com a média ${media}! `)
}
else {
    alert(`Atenção: ${nomeAluno} ficou em recuperação com média ${media}.`);
}
let desejaContinuar = confirm("Deseja realizar o cálculo para outro aluno?");
if (desejaContinuar) {
    console.log("O usuário escolheu continuar o sistema.");
} else {
    console.log("O usuário encerrou as consultas.");
}
