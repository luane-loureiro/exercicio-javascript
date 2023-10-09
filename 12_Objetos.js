//  =============== Objetos  =============== 

//  ===============  Como criar um objeto no JavaScript  =============== 

let pessoa = {
    nome : 'Luane', 
    idade : 43,
}

console.log (pessoa)

console.log(pessoa.nome)
console.log(pessoa['nome'])
console.log(pessoa.idade)

//  ===============  Como adicionar um par chave-valor   =============== 

pessoa.altura = 1.68 // adiciona uma nova chave ao objeto
pessoa.nome = 'Luane Carolina'  // modifica uma chave

console.log(pessoa)


//  ===============  Como remover um par de chaves-valor   =============== 

delete pessoa.altura
console.log(pessoa)


//  ===============   Como percorrer   =============== 

for (let chave in pessoa) {
    console.log(chave)
}
