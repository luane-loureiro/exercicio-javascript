// ===============  Funções  ===============

// definição da função
function saudacao() {
    console.log('Ola, seja bem vindo ao nosso curso de JavaScript!') 
}

saudacao()


//  ===============  como enviar parametros para as funções =============== 

function saudacao(nome, curso='JavaScript'){
    console.log(`Ola, ${nome} seja bem vindo ao nosso curso de ${curso}!`) 
}
saudacao('luane')


// ===============  Retorno da Função  ===============

function soma(numero1,numero2){
    return numero1 + numero2
}

