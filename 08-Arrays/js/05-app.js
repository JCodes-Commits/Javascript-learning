// AÑADIR NUEVOS ELEMENTOS A EL INICIO (Unshift) O AL FIN DEL ARRAY (Push)

const meses = ['Enero', 'Febrero', 'Marzo'];

//Esto es muy manual ya que toca ver en que posicion estará en el rreglo y no es  tan dinamico

meses[3] = 'Abril'

//METODOS DE LOS ARREGLOS

//Agregar a el final del arreglo con "Push"

meses.push('Mayo')
meses.push('Junio')
meses.push('Julio')

console.table(meses)

// Ahora cambiaremos el ejercicio a  un carrito de  compras y lo iniciaremos como un carito vacio ya que siempre es asi cuado se  inicia un carrito de  compras

const carrito = [];


// Definir un producto
 const producto = {
      nombre: "Monitor 34 pulgadas",
      precio: 400
 }

 // Digamos que sigo navegando y queremos comprar uns egundo producto

 const producto2 = {
      nombre: 'Infinix Note 50 pro',
      precio: 550
 }

 carrito.push(producto)
 carrito.push(producto2)

 //Ahora digamos que queremos un tercer producto  pero quiero que este aparezca a el principio del carrito, entonces usamos UNSHIFT

 const producto3 = {
      nombre: 'Teclado',
      precio: 80
 }


carrito.unshift(producto3);

 console.table(carrito)
