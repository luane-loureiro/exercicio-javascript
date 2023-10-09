// ===============  ARRAYS ===============

// =============== como criar um arrays ===============

let arr = ['luane', 43, 1.68 , true]

console.log(arr)

// =============== como acessar os elementos do array ===============

console.log('primeiro elemento', arr[0])
console.log('segundo elemento', arr[1])
console.log('terceiro elemento', arr[2])
console.log('quarto elemento', arr[3])

// ===============  como obter o tamanho do array  ===============

console.log ('tamanho do array', arr.length)

// =============== Percorrendo arrays ===============

for (let i=0; i < arr.length; i++){

    console.log(arr[i])
}

for (let elemento of arr){
    console.log(elemento)
}

for (let indice in arr){
    console.log(indice, arr[indice])
}

