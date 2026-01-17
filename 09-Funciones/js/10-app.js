// Arrow Functions     👉    son una forma más corta y moderna de escribir funciones en JavaScript, usando =>, y se caracterizan por no tener su propio this, sino que heredan el del contexto donde fueron creadas.


const aprendiendo = function() {
      console.log('Aprendiendo Javascript');
}


//✅ Cuando el Arrowfunction es  una sola linea se puede eliminar el "console Log" y tan solo se coloca un "Return"
const aprendiendo2 = () => 'Aprendiendo Javascript';

console.log(aprendiendo2());









