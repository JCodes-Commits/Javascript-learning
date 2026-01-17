// 👉 OPERADOR -  MAYOR QUE Y MENOR QUE

const dinero = 1000;
const totalAPagar = 300;
const cheque = true;
const tarjeta = true;

// ✅ Con el operador de Mayor o igual >= podemos decir tambien que con el dinero que tenemos podria usarse ya que es mayor o igual de lo que se  necesita para pagar en caja

//✅ En estos casos revisa las condiciones en forma de  casacada, es decir que si hay dinero pues se  cumple la primera y si no, pues pasa a la segunda que seria El cheque, y si no pues pasa a  revisar la tarjeta y si ya no hay ninguna pues dirá "Fondos insuficientes"
 

if (dinero >= totalAPagar) {
      console.log('Si podemos pagar');
}else if (cheque) {
      console.log('Si puedo pagar ya que tengo Un Cheque');
}else if (tarjeta) {
      console.log('Si puedo pagar ya que tengo la tarjeta');
}else{
      console.log('Fondos insuficientes');
}
