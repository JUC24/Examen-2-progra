let lista = [2,3,4,5,6,7,8,10]

lista.pop()
lista.shift()
let suma = lista.reduce((a , b) => a + b)
let pares = lista.filter(el => el % 2 == 0)


console.log(lista)
console.log(suma)
console.log(pares)