// Manera DECLARATIVA para eliminar el ULTIMO y el PRIMER elemento de el arreglo.

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

 const producto4 = {
      nombre: 'Iphone 14 Pro Max',
      precio: 1200
 }

 carrito.push(producto);
 carrito.push(producto2);
 carrito.push(producto4);

 //Ahora digamos que queremos un tercer producto  pero quiero que este aparezca a el principio del carrito, entonces usamos UNSHIFT

 const producto3 = {
      nombre: 'Teclado',
      precio: 80
 }

// Llevar a el incio  de el Array 
carrito.unshift(producto3);

console.table(carrito);

// Metodo SHIFT👉 Eliminar el PRIMER elemento de un arrreglo --> Variable.shift()

// carrito.shift();
// console.table(carrito);


// Metodo POP👉 Eliminar el ULTIMO elemento de un arrreglo --> Variable.Pop()

// carrito.pop();
// console.table(carrito);


// Metodo SPLICE 👉 Elimina elementos de manera especifica  -->  variable.splice(Desde que elmento empieza, Cuantos elementos quita)

// eliminar 2 elementos:  será el Monitor y el infinix

carrito.splice(1,2)
console.table(carrito)

//O si ahora quiero borrar el primero

carrito.splice(0,1)
console.table(carrito)
