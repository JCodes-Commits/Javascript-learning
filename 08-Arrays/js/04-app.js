// RE ASIGNACION DE  VALORES EN EL ARRAY

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


// Aqio queremos que en las posiciones colocadas se ponga el valor que nosotros designamos, la mirar la tabla el primero no dira enero si no 'Nuevo mes'
meses [0] = 'Nuevo Mes';
meses [7] = 'Ultimo Mes';
meses [10] = 'Supuesto Ultimo Mes';

// Ahora si creamos un elemento que no existe como el 10, los valores de la posicion 8, 9 y 10 quedan en blanco, es decir salta de  la 7 a  la 10.


console.table(meses);


