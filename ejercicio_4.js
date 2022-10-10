let Desicion = prompt("digite 1. suma, 2. resta, 3. multiplicacion, 4. division, 5.raiz cuadrada, 6.potencia")


if(Desicion === "1"){
  let num1 = prompt("Digite un valor: ")
  let num2 = prompt("Digite un valor: ")
  num1 = Number(num1)
  num2 = Number(num2)
  suma(num1, num2)  
}

if(Desicion === "2"){
  let num1 = prompt("Digite un valor: ")
  let num2 = prompt("Digite un valor: ")
  num1 = Number(num1)
  num2 = Number(num2)
  resta(num1, num2)
}

if(Desicion === "3"){
  let num1 = prompt("Digite un valor: ")
  let num2 = prompt("Digite un valor: ")
  num1 = Number(num1)
  num2 = Number(num2)
  multiplicacion(num1, num2)
}

if(Desicion === "4"){
  let num1 = prompt("Digite un valor: ")
  num1 = Number(num1)
  let num2 = prompt("Digite un valor: ")
  num2 = Number(num2)
  division(num1, num2)
}

if(Desicion === "5"){
  let num1 = prompt("Digite un valor: ")
  num1 = Number(num1)
  alert(Math.sqrt(num1))
}

if(Desicion === "6"){
  let num1 = prompt("Digite un valor: ")
  num1 = Number(num1)
  let num2 = prompt("Digite la potencia que desea obtener: ")
  num2 = Number(num2)
  alert (Math.pow(num1, num2))
}



function suma (a, b){
  let resul = a + b
  alert("suma " + resul)
}

function resta (a, b){
  let resul = a - b
  alert("resta " + resul)
}

function multiplicacion (a, b){
  let resul = a * b
  alert("Multiplicar "+ resul)
}

function division (a, b){
  let resul = a / b
  if( b === 0){
    alert("la division no se puede realizar")
  }
  alert("Division " + resul)
}

