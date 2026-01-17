// Como agregar elemntos a el incio o al final de un arreglo usando el Rest Operator y no utilizando PUSH O UNSHIFT

// Es importante mencionar que en las nuevas versiones de  Javascript se dieron varuas funciones que hacen lo mismo o son similares, unas se les conoce como declarativas y las otras como formas imperativas y amabs son muy utilizadas.



// IMPERATIVA = Punsh & Unshift --> 👉 Son métodos imperativos porque mutan el array original. Decimos “imperativo” porque el código se enfoca en dar órdenes paso a paso: “agrega esto”, “quita esto”, “modifica esto”.


// Declarativa = --> 👉 Las funciones declarativas (o estilo declarativo) en JS son las que no modifican el array original y se enfocan en qué quieres obtener, no en los pasos internos; ejemplos típicos son métodos como map, filter, reduce, find, some, every, slice, concat, includes, join y usar el spread ..., que siempre te devuelven un nuevo array o un nuevo valor, dejando intacto el dato de entrada. Es decir: en lugar de cambiar el array, crean uno nuevo o te dan un resultado sin tocar el original.


const carrito = [];

// Definir un producto
 const producto = {
      nombre: "Monitor 34 pulgadas",
      precio: 400
 }


 const producto2 = {
      nombre: 'Infinix Note 50 pro',
      precio: 550
 }


 const producto3 = {
      nombre: 'Teclado',
      precio: 80
 }

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado, ];

 console.table(resultado);




 