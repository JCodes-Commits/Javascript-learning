// ↪️ARROW FUNCTION EN UN FOR EACH Y UN MAP   - se tomara el ejercicio del archivo 10 de Arrays

// 
const carrito = [
      {nombre: 'Monitor 34 Pulgadas', precio: 500},
      {nombre: 'Infinix Note 50 Pro', precio: 290},
      {nombre: 'Ryzen 5 5800X3D', precio: 430},
      {nombre: 'Televisor Kalley', precio: 600},
      {nombre: 'Tablet Samsung  ', precio: 515},
      {nombre: 'Diadema Logitech', precio: 462},
]

const  nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}` )
carrito.forEach( producto => console.log(`${producto.nombre} - Precio:${producto.precio}` ));

console.log(nuevoArreglo);
