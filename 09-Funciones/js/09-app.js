// Metodo de Propiedad ==> Añadir Funciones en un objeto.

const reproductor = {
      reproducir: function(id){
            console.log(`Reproduciento cancion cone el id ${id}`);
      },
      pausar: function(){
            console.log(`Pausando...`);
      },
      borrar: function(id) {
            console.log(`Borrando cancion... ${id}`);
      },
      crearPlayslist: function(nombre){
            console.log(`Creando la playlist de ${nombre}`);
      },
      reproducirPlaylist: function(nombre){
            console.log(`Reproduciendo la Playslist de ${nombre}`);      
      }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30)
reproductor.crearPlayslist(`Dancehall`);
reproductor.crearPlayslist(`Vallenato`);
reproductor.reproducirPlaylist(`Dancehall`)