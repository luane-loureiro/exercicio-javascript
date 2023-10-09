//  =============== Laço numérico  ===============

const imput = require('readline-sync')

//  ===============  o problema  =============== 

//const nota1= Number(imput.question('informe a nota 1: '))
//const nota2= Number(imput.question('informe a nota 2: '))
//const nota3= Number(imput.question('informe a nota 3: '))

//let media - (nota1 + nota2 + nota3) / 3

//  ===============  Acumulador  =============== 

//let acumulador = 0;
//acumulador = acumulador + 10;     // adiciona a ele mesmo o novo valor
//acumulador += 2;                  // adiciona a ele mesmo o novo valor
//acumulador ++ ;                    // adicionar +1


//console.log(acumulador)

// ===============   Estutura for  =============== 
//for (let i = 0; i <= 10; i++ ) {
//    console.log('repetição', i);
//}


//for (let i = 10; i > 0; i-- ) {
//    console.log('repetição', i);
//}

// ===============  Resolvendo o problema inicial  ===============
let nota;
let soma = 0;
let media = 0

for (let i = 1; i <= 3; i++ ) {
    nota = Number(imput.question(`informe a nota ${i} do aluno: `));
    soma = soma + nota;
};
media = soma/3

 console.log(`a media do aluno é ${soma /3}`);

 if (media >= 10){
    console.log('O aluno foi aprovado com nota Máxima! Parabéns!')
 }
 else if (media >= 7){
    console.log('O aluno foi aprovado!')
 } 
 
 else if (media >= 5){
    console.log('O aluno está de recuperação!')

    }
 else {
    console.log('o aluno está reprovado...')
 }
