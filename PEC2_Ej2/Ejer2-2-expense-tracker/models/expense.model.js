/** 
 * @Class Modelo
 * Gestiona los datos de la aplicacion
*/

class Transaction {
  constructor ({ text, amount, complete} = {complete: false}){
    this.id = this.generateID();
    this.text = text;
    this.amount = amount;
    this.complete = complete;
  }

  generateID() {
    return Math.floor(Math.random() * 100000000);
  }
} 