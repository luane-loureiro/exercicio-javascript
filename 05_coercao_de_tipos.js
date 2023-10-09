//---------coerção (conversão) de tipos-------------

//   1 - coerção explicita

const numero = 10
console.log (numero, typeof numero)

const numeroEmFormatoDeStrig = String(numero)
console.log(numeroEmFormatoDeStrig,typeof numeroEmFormatoDeStrig)

console.log(Number('1234556'))
console.log(parseFloat('1223344.5675'))
console.log(parseInt('1223344.5675'))
console.log(Boolean('1')) // só o zero é false, qualquer numero diferente de zero é true

console.clear()

//  2 - coerçao implicita(automática) 

console.log ('10' + 3)      // junta os algarismos 
console.log ('10'- 1)       // faz a subtraçao normalmente
console.log (10 * '3')      // faz a multiplicação normalmente
console.log (10 / "2")      // faz a divisäo normalmente
console.log (10 / 'assss')  // retorna "NaN" - not a number


// qual será a said desses códigos?
// 1- 
let n = 1 + '1';
n = n - 1;
// 10
console.log(n)

// 2 -
console.log (2 + 3 + 4 + '5')
// 95

// 3 - 
console.log('5'+ 2 + 3 + 4)
// 5234

// 4-
console.log('10' - '4' - '3' - 2 + '5')
// 15



