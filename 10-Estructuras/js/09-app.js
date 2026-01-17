// 👉  OPERADOR TERNARIO

const autenticado = true;
const puedePagar = true;

console.log( autenticado || puedePagar ? 'Si esta autenticado' : 'No no esta autenticado' );
 
const efectivo = 800  ;
const credito =  400 ;
const disponible = efectivo + credito;
const totalPagar =  600  ;
 
if( efectivo > totalPagar || credito > totalPagar || disponible › totalPagar ) {
      if (efectivo > totalPagar) {
            console.log('Si pagaste con efectivo');
      } else {
            console.log('Otra forma de pago');
      }
} else {
      console.log('Fondos insuficientes');
}