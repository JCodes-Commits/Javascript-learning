// 👉 COMPARADOR ESCTRICTO

// 💫 Que tal si quiero que puntaje sea diferente a 1000


const puntaje = 1000;
const puntaje2 = '1000';


console.log(typeof puntaje);
console.log(typeof puntaje2);


// if(puntaje != 1000) { //    esto != significa👉 Diferente / == 👉 Igual a
//       console.log('Si es igual...');
// } 



if(puntaje === '1000') { 
      console.log('Si es igual!');
} else{
      console.log('No es igual');
}

//       ==    Ooperador que no es  estrictor
//       ===    Ooperador ESTRICTO