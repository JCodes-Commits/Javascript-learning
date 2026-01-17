// 👉 DETENER UNA EJECUCION DE UN IF

      const autenticado = true;

      if (autenticado) {
            console.log('El usuario esta autenticado');
      }

      const puntaje = 450;
// // aca colocamos el puntaje mayor en el top de los if ya que si no solo correria el comentario mayor a  300
//       if (puntaje > 400 ) {
//             console.log('Excelente puntaje!!!');   
//        } else if (puntaje > 300){
//             console. log ('Buen puntaje... felicidades')
//        }

function revisarPuntaje () {
      if (puntaje > 400) {
            console.log('Excelente!!!');
      return;
      }

      if (puntaje > 300) {
            console.log('Buen Puntaje... felicidades');
      return
      }
      // Para colcoar varios if uno detras de otro toca si o si llamar una funcion 
}

revisarPuntaje();