// Aprenderemos Metodo de como obtener valores de manera declarativa 


//Un Arreglo que dentro tiene Objetos

const carrito = [
      {nombre: 'Monitor 34 Pulgadas', precio: 500},
      {nombre: 'Infinix Note 50 Pro', precio: 290},
      {nombre: 'Ryzen 5 5800X3D', precio: 430},
      {nombre: 'Televisor Kalley', precio: 600},
      {nombre: 'Tablet Samsung  ', precio: 515},
      {nombre: 'Diadema Logitech', precio: 462},
]

//Obtener un valor de  alguna propiedad usando el for --> 👉 Manera Imperativa 


for (let i = 0; i < carrito.length; i++) {
      console.log(carrito[i]);
}

// O si quiero obtener solo los nombres  ▶️ colocamos carrito[i].nombre, es decir le agregamos la parte de  nombre para que nos muestre esa propiedad del los objetos

for (let i = 0; i < carrito.length; i++) {
      console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}` );
}

//Metodo para Obtener un valor de  alguna propiedad usando el for 👉  Manera Declarativa

// Metodo 👉 variable.funcion();

// Funcion especifica para obtener valores ▶️ forEach() 


carrito.forEach( function(producto){
      console.log(`${producto.nombre} - Precio: ${producto.precio}` );
});


//Resumen de apra que sirve cada uno

// 👉 For, es mejor cuando necesitas más control sobre el flujo del bucle (parar(break), saltar(continue), etc.).

// 👉 forEach, es mejor para la mayoría de casos de “recorrer un array y hacer algo con cada elemento” por legible y sencillo. 
