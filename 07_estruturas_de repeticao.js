// ---------------- laços condicionais ------------
const imput = require('readline-sync');

const numero_sorteado = 5;

let numero = Number(imput.question('Qual numero voce escolhe? '));

while (numero !== numero_sorteado){
    console.log('voce errou o numero. tente novamente...')

    numero = Number(imput.question('qual Numero voce escolhe?'))

} 
    console.log('Voce acertou!!');

