// Object Literal: es una forma rápida de crear un objeto escribiéndolo directamente con llaves {}, lo defines “ahí mismo”, sin usar new ni funciones constructoras.

const producto = {
      nombre: "Monitor 20 Pulgadas",
      precio: 300,
      disponible: true,
      
}


// OBJECT CONSTRUCTOR --> Es una funcion a la cual claro se  le da un nombre, y es  una forma de crear objetos parecidos de forma rápida y ordenada, sin tener que repetir el mismo código una y otra vez, usando la palabra new y la funcion que se  define al principio.


function Producto(nombre, precio){
      this.nombre = nombre;
      this.precio = precio;
      this.disponible = true;
}

const producto2 = new Producto('Monitor de 34 Pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Television de 70 Pulgadas', 650);
console.log(producto3);

const producto4 = new Producto('Chasis Hyte Y70', 250);
console.log(producto4);
