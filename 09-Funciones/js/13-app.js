// 👉 ARROW FUNCTIONS EN EL EJERCICIO DE REPRODUCTOR DE  MUSICA, ➡️ arrrow functions en propiedades

const reproductor = {
      cancion: '',
      reproducir: id => console.log(`Reproduciento cancion cone el id ${id}`),
      pausar: () => console.log(`Pausando...`),
      borrar: id => console.log(`Borrando cancion... ${id}`),
      crearPlayslist: nombre =>console.log(`Creando la playlist de ${nombre}`),
      reproducirPlaylist: nombre => console.log(`Reproduciendo la Playslist de ${nombre}`),

      // El This que se  usa a continuacion es para buscar la cancion dentro del objeto de arriba
      // ✅ Set es una forma de  agregar Valores, el set puede obtener parametros, pero el get no.
      // Formula ⚛️〰️ set property(parametro) {}

      // ✅ Get es una forma de  Obtener esos Valores
      // Formula ⚛️〰️ get property() {}      


      set nuevaCancion(cancion) {
            this.cancion = cancion;
            console.log(`Añadiendo ${cancion}`);
      },
      get obtenerCancion() {
            console.log(`${this.cancion}`);
      }
}

reproductor.nuevaCancion = 'Donde de Ryan Castro'
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30)
reproductor.crearPlayslist(`Dancehall`);
reproductor.crearPlayslist(`Vallenato`);
reproductor.reproducirPlaylist(`Dancehall`)