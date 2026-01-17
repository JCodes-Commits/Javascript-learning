// DESTRUCTURING 👉 Extraer valores de      Objetos   y   Arreglos


//DESTRUCTURING  de objetos 🔜 ⭐Manera Imperativa⭐ 

const producto = {
      nombre: "Monitor 34 Pulgadas",
      precio: 300,
      disponible: true
}

const {disponible} = producto;

console.log(disponible);



// DESTRUCTURING de Arreglos 🔜  ⭐Manera Declarativa⭐

const numeros= [10, 20, 30, 40, 50]

const [primero, segundo, tercero] = numeros;

console.log(primero);
console.log(tercero);
