/** 
 Como llevaba el ejercicio antes de que se diera o se quitara 
*/

let matrix = [[0,0,0], [0,0,0], [0,0,0]]
let cont = 0

for(let i=0; i<matrix.length; i++){
  for(let j=0; j<matrix.length; j++){
      cont = cont + 1
      matrix[i][j] = cont 
  }
}

console.log(cont)

/* ejercicio resuelto, notas didacticas/*

/**
  contador = 1;
  for(let i = 0; i < matriz.length; i++){
	  for(let j = 0; j < matriz.length; j++){
		  matriz[i][j] = contador;
		  contador = contador + 2;
	  }
  }

  console.log(matriz)
*/