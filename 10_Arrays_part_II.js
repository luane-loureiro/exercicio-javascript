// =============== Arrays part II - Métodos de array ===============

let arr1 = [0, 1, 2, 3, 4]
let arr2 = []

// ===============  fatiamento: slice ===============

console.log(arr1.slice(0,2))  // mostra apartir do elemento 0 até o segundo elemento (< que o segundo elemento)
console.log(arr1.slice(2))    // mostra do terceiro ( > que o segundo elemento ) elemento até o fim do array

// ===============  adicionando elemntos: push | unshift  ===============
// push - adiciona um elemento ao final da lista
console.log('antes de adicionar com push: ', arr2)

arr2.push(10, 20, 30)
arr2.push(40)
console.log('depois de adicionar com push: ', arr2)

// unshift - adiciona um elemento ao começo da lista
console.log('antes de adicionar com unshift: ', arr2)

arr2.unshift(0)
console.log('depois de adicionar com unshift: ', arr2)

// Havendo mais de um elemento adiociona na ordem em q aparecem (primeiro, segundo, terceiro....)
arr2.unshift(-20, -10)
console.log('depois de adicionar com unshift: ', arr2)


// ===============  removendo elementos: pop | shift  ===============
// pop - remove o ultimo elemento da lista
console.log('antes de remover com pop:', arr2)

let elementoRemovido = arr2.pop()
console.log('Depois de remover com o pop: ', arr2)
console.log('O elemento removido com pop foi', elementoRemovido)

// shift - remove o primeiro elemento 

console.log('antes de remover com Shift:', arr2)

elementoRemovido = arr2.shift()
console.log('Depois de remover com o Shift: ', arr2)
console.log('O elemento removido com shift foi', elementoRemovido)


// ===============  concatenando arrays: concat  ===============

console.log('arr1', arr1)
console.log('arr2', arr2)

console.log(arr1.concat(arr2))
let arr3 = (arr2.concat(arr1))
console.log(arr3)


//  ===============  Buscando arrays: indexOf | lastIndexOf  ===============
let arr4 = [1,2,3,3,5,3]
// indexOf - mostra o indice do primeiro elemento igual a busca
console.log(arr4)
let indiceDoElemento3 = arr4.indexOf(3)
console.log (indiceDoElemento3) // mostra o indice do primeiro numero 3

// lastIndesOf - mostra o indice do ultimo elemento igual a busca

console.log(arr4)
console.log(arr4.lastIndexOf(3))  // mostra o indice do ultimo elemento 3
console.clear()

//   =============== descobrindo a existendia de um elemento: includes   =============== 

console.log(arr1)
console.log('no arr1 tem o numero 12? ', arr1.includes(12))
console.log('no arr1 tem o elemento 3? ', arr1.includes(3))

//  =============== Invertendo arrays: reverse  =============== 

console.log('arr1 normal: ', arr1)

const arr1Invertido = arr1.reverse()
console.log('arr1 invertido: ', arr1Invertido)
