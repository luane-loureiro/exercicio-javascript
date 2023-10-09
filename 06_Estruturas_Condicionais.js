// ------------- Estruturas condicionais -----------

const idade = 20

if (idade >= 18) {     
    console.log('você é maior de idade')
}

else {
console.log ('vc é menor de idade')
}


// se media for maior ou igual a 7
// e a media for maior ou igual a 5, recuperaçao
// se a media for menor que 5 reprovado

console.clear()

let media = 10
 if (media >= 7) {
    console.log("Aprovado, Parabéns!")
} 
else if (media <= 7 && media >= 5) { // ou usar apenas media >= 5, pq se ela ja passou pelka primeira condicao, ela já eh menor que 7
    console.log("Você está de recuperação!") 
 }

 else {
    console.log("você foi Reprovado...")
 }