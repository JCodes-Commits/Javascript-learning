// 👉 OPERADOR -  SWITCH

const metodoPago = 'cheque'

switch (metodoPago) {
      case 'efectivo':
            console.log(`Pagaste con ${metodoPago}`);
            break;
      case 'cheque':
            console.log(`Pagaste con ${metodoPago}`);
            break;

      default:
            console.log('Aun no ha seleccionado un metodo de  Pago o no soportado');
            break;
}