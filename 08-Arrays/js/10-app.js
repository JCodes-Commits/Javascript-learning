const carrito = [
      {nombre: 'Monitor 34 Pulgadas', precio: 500},
      {nombre: 'Infinix Note 50 Pro', precio: 290},
      {nombre: 'Ryzen 5 5800X3D', precio: 430},
      {nombre: 'Televisor Kalley', precio: 600},
      {nombre: 'Tablet Samsung  ', precio: 515},
      {nombre: 'Diadema Logitech', precio: 462},
]

const  nuevoArreglo1 = carrito.forEach( function(producto){
      return `${producto.nombre} - Precio: ${producto.precio}` ;
} )


const  nuevoArreglo2 = carrito.map( function(producto){
      return `${producto.nombre} - Precio: ${producto.precio}` ;
} )




console.log(nuevoArreglo1);
console.log(nuevoArreglo2);


// si se supone que .forEach y .Map hacen lo mismo... cual e s la diferencia?


// For each          👉 solo recorre, no devuelve un nuevo array útil 👉 Sirve para ejecutar código por cada elemento (mostrar, guardar en BD, etc.) 👉  Lo usas cuando no necesitas un nuevo array, solo hacer algo.

// Map               👉 recorre y crea un nuevo array transformado 👉 Cada return de la función se guarda en un nuevo array. 👉 Lo usas cuando quieres transformar datos.

// Ejemplo : En el carrito, forEach sirve solo para recorrer cada producto y hacer algo con él, por ejemplo mostrarlo en consola (carrito.forEach(p => console.log(p.nombre, p.precio))), pero no crea una nueva lista, mientras que map recorre los productos y devuelve un nuevo array transformado, por ejemplo uno con descuento: const carritoConDescuento = carrito.map(p => ({ nombre: p.nombre, precio: p.precio * 0.8 }));, así sigues teniendo el carrito original igual y aparte consigues otra lista con los precios rebajados.